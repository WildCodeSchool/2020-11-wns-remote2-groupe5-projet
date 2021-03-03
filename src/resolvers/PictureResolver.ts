import { GraphQLUpload } from 'graphql-upload';
import path from 'path';
import { Stream } from 'stream';
import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { CreatePictureInput } from './../inputs/CreatePictureInput';
import Avatar, { saveAndWritePictureToFile } from '../models/Avatar';
import User from '../models/User';
import { writeFileToPicturesDirectory } from '../utils';
import { createWriteStream, mkdirSync } from 'fs';

const PICTURES_DIRECTORY = path.join(__dirname, '../public/media/pictures');

@Resolver()
export default class PictureResolver {
  @Mutation(() => Avatar)
  async uploadPicture(
    @Ctx() { user }: { user: User | null },
    @Arg('file', () => GraphQLUpload)
    file: any
  ): Promise<string> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    return file.then((file: any) => {
      //Contents of Upload scalar: https://github.com/jaydenseric/graphql-upload#class-graphqlupload
      file
        .createReadStream()
        .pipe(createWriteStream(path.join(PICTURES_DIRECTORY, file.filename)));
      //node stream api: https://nodejs.org/api/stream.html
      return file;
    });
    // const { filename, createReadStream } = file;

    // const stream = createReadStream();

    // const extension = path.extname(filename);

    // const newFilename = `155555${extension}`;

    // await writeFileToPicturesDirectory(stream, newFilename);

    // return newFilename;
  }
}
