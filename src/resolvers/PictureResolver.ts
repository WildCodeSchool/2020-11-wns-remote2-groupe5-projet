import { GraphQLUpload } from 'graphql-upload';

import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { CreatePictureInput } from './../inputs/CreatePictureInput';
import Avatar, { saveAndWritePictureToFile } from '../models/Avatar';
import User from '../models/User';

@Resolver()
export default class PictureResolver {
  @Mutation(() => Avatar)
  async uploadPicture(
    @Ctx() { user }: { user: User | null },
    @Arg('file', () => GraphQLUpload)
    file: CreatePictureInput
  ): Promise<Avatar> {
    if (!user) {
      throw Error('You are not authenticated.');
    }
    const { filename, stream } = file;
    return saveAndWritePictureToFile(filename, stream, user);
  }
}
