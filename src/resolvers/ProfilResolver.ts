import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import CreateExperienceInput from '../inputs/CreateExperienceInput';
import Experience from '../models/Experience';
import User from '../models/User';

@Resolver()
export default class ProfilResolver {
  @Mutation(() => [Experience])
  async createExperiences(
    @Ctx() { user }: { user: User | null },
    @Arg('experiences', () => [CreateExperienceInput])
    experiences: CreateExperienceInput[]
  ): Promise<Experience[]> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    user.experiences = await Promise.all(
      experiences.map(async (experience) => {
        const result = Experience.create(experience);
        await result.save();
        return result;
      })
    );

    await user.save();

    return user.experiences;
  }
}
