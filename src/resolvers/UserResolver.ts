import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { Response } from 'express';
import { compare } from 'bcrypt';
import { getConnection } from 'typeorm';
import CreateSessionInput from '../inputs/CreateSessionInput';
import CreateUserInput from '../inputs/CreateUserInput';
import User from '../models/User';
import UserSession from '../models/UserSession';

@Resolver()
export default class UserResolver {
  @Mutation(() => User)
  async signin(@Arg('data') data: CreateUserInput): Promise<User> {
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
        process.env.SECURE_COOKIES ? ' Secure;' : ''
      } SameSite=Strict`,
    ]);
    return user;
  }

  @Mutation(() => User)
  async putUserInfos(
    @Arg('userID') userID: string,
    @Arg('data') data: CreateUserInput
  ): Promise<User> {
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(data)
      .where('userID = :id', { id: userID })
      .execute();

    return User.findOne(userID) as Promise<User>;
  }

  @Query(() => User)
  user(@Arg('userID') userID: string): Promise<User> {
    return User.findOne(userID, {
      relations: ['articles'],
    }) as Promise<User>;
  }

  @Query(() => [User])
  allUsers(): Promise<User[]> {
    return User.find({ relations: ['articles'] });
  }
}
