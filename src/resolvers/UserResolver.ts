import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { getConnection } from 'typeorm';
import CreateUserInput from '../inputs/CreateUserInput';
import User from '../models/User';

@Resolver()
export default class UserResolver {
  @Mutation(() => User)
  async signin(@Arg('data') data: CreateUserInput): Promise<User> {
    const user = User.create(data);
    await user.save();
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
