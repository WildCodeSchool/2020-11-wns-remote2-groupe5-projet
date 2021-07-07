import { GraphQLUpload, FileUpload } from 'graphql-upload';
import path from 'path';
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import User from '../models/User';
import { createWriteStream, mkdirSync, stat, unlink } from 'fs';
import Picture from '../models/Picture';

const AVATAR_DIRECTORY = path.join(__dirname, '../../public/media/avatars');

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

    mkdirSync(AVATAR_DIRECTORY, { recursive: true });

    const { filename, createReadStream } = file;

    const extension = path.extname(filename);

    const newFileName = user.userID + extension;

    const stream = createReadStream();

    const writeFile = () => {
      stream.pipe(
        createWriteStream(path.join(AVATAR_DIRECTORY, newFileName)).on(
          'close',
          async () => {
            user.avatarFileName = newFileName;
            await user.save();
          }
        )
      );
    };

    // if an avatar exists, delete it and then create new, else create new

    if (!user.avatarFileName) {
      writeFile();
    } else {
      stat(path.join(AVATAR_DIRECTORY, user.avatarFileName), function (err) {
        if (err) {
          writeFile();
        } else {
          unlink(path.join(AVATAR_DIRECTORY, user.avatarFileName), function (
            err
          ) {
            if (err) {
              console.log(err);
              throw Error('ERROR writing file');
            } else {
              writeFile();
            }
          });
        }
      });
    }

    return filename;
  }

  @Mutation(() => Picture)
  async uploadArticlePicture(
    @Ctx() { user }: { user: User | null },
    @Arg('file', () => GraphQLUpload) file: FileUpload,
    @Arg('articleId') articleId: string,
    @Arg('fileName') fileName: string
  ): Promise<string> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    const ARTICLE_DIRECTORY = path.join(
      __dirname,
      '../../public/media/articles/' + articleId
    );

    mkdirSync(ARTICLE_DIRECTORY, { recursive: true });

    const { createReadStream } = file;

    const stream = createReadStream();

    const writeFile = () => {
      stream.pipe(createWriteStream(path.join(ARTICLE_DIRECTORY, fileName)));
    };

    // if an image exists, delete it and then create new, else create new

    stat(path.join(ARTICLE_DIRECTORY, user.avatarFileName), function (err) {
      if (err) {
        writeFile();
      } else {
        unlink(path.join(ARTICLE_DIRECTORY, user.avatarFileName), function (
          err
        ) {
          if (err) {
            console.log(err);
            throw Error('ERROR writing file');
          } else {
            writeFile();
          }
        });
      }
    });

    return fileName;
  }
}
