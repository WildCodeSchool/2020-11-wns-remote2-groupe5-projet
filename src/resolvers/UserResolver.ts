import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { Response } from 'express';
import { compare } from 'bcrypt';
import { getConnection } from 'typeorm';
import CreateSessionInput from '../inputs/CreateSessionInput';
import CreateUserInput from '../inputs/CreateUserInput';
import User from '../models/User';
import UserSession from '../models/UserSession';
import { SECURE_COOKIES } from '../config';

@Resolver()
export default class UserResolver {
  @Mutation(() => User)
  async signIn(@Arg('data') data: CreateUserInput): Promise<User> {
    const user = User.create(data);
    await user.save();
    return user;
  }

  @Mutation(() => User)
  async createSession(
    @Arg('input') input: CreateSessionInput,
    @Ctx() { res }: { res: Response }
  ): Promise<User> {
    const { email, password } = input;
    const user = await User.findOne({ email });
    const authenticationError = new Error(
      'Incorrect username and/or password.'
    );
    if (!user) {
      throw authenticationError;
    }
    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching) {
      throw authenticationError;
    }
    const userSession = UserSession.create({ user });
    await userSession.save();
    res.set('set-cookie', [
      `sessionId=${userSession.uuid}; Max-Age=2592000; HttpOnly;${
        SECURE_COOKIES ? ' Secure;' : ''
      } SameSite=Strict`,
    ]);
    return user;
  }

  @Mutation(() => User)
  async updateUserInfos(
    @Ctx() { user }: { user: User | null },
    @Arg('data') data: CreateUserInput
  ): Promise<User> {
    if (!user) {
      throw Error('You are not authenticated.');
    }
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(data)
      .where('userID = :id', { id: user.userID })
      .execute();

    return User.findOne(user.userID) as Promise<User>;
  }

  @Query(() => User)
  me(@Ctx() { user }: { user: User | null }): Promise<User> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    return User.findOne(user.userID, {
      relations: ['articles', 'experiences', 'diplomas'],
    }) as Promise<User>;
  }

  @Mutation(() => User)
  async deleteSession(@Ctx() { user }: { user: User | null }): Promise<User> {
    if (!user) {
      throw Error('You are not authenticated.');
    }
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(UserSession)
      .where('userUserID = :id', { id: user.userID })
      .execute();

    return User.findOne(user.userID) as Promise<User>;
  }

  @Query(() => [User])
  allUsers(): Promise<User[]> {
    return User.find({ relations: ['articles'] });
  }
}
