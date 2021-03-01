import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import CreateDiplomaInput from '../inputs/CreateDiplomaInput';
import CreateExperienceInput from '../inputs/CreateExperienceInput';
import Experience from '../models/Experience';
import Diploma from '../models/Diploma';
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

  @Mutation(() => [Diploma])
  async createDiplomas(
    @Ctx() { user }: { user: User | null },
    @Arg('diplomas', () => [CreateDiplomaInput])
    diplomas: CreateDiplomaInput[]
  ): Promise<Diploma[]> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    user.diplomas = await Promise.all(
      diplomas.map(async (diploma) => {
        const result = Diploma.create(diploma);
        await result.save();
        return result;
      })
    );

    await user.save();

    return user.diplomas;
  }
}
