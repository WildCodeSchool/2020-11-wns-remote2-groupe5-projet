import { GraphQLUpload, FileUpload } from 'graphql-upload';
import path from 'path';
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import User from '../models/User';
import { createWriteStream, mkdirSync } from 'fs';
import Picture from '../models/Picture';

const PICTURES_DIRECTORY = path.join(__dirname, '../../public/media/avatars');

@Resolver()
export default class PictureResolver {
  @Mutation(() => Picture)
  async uploadAvatar(
    @Ctx() { user }: { user: User | null },
    @Arg('file', () => GraphQLUpload)
    file: FileUpload
  ): Promise<string> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    mkdirSync(PICTURES_DIRECTORY, { recursive: true });

    const { filename, createReadStream } = file;

    const extension = path.extname(filename);

    const newFileName = user.userID + extension;

    const stream = createReadStream();

    stream.pipe(createWriteStream(path.join(PICTURES_DIRECTORY, newFileName)));

    return filename;
  }
}
