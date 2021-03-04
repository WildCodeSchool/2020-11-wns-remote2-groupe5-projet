import { createWriteStream, mkdirSync } from 'fs';
import path from 'path';
import { Stream } from 'stream';
import { ReadStream } from 'fs-capacitor';

const PICTURES_DIRECTORY = path.join(__dirname, '../public/media/pictures');

export function writeFileToPicturesDirectory(
  createReadStream: any,
  filename: string
): Promise<void> {
  mkdirSync(PICTURES_DIRECTORY, { recursive: true });

  return new Promise((res) =>
    createReadStream
      .pipe(createWriteStream(path.join(PICTURES_DIRECTORY, filename)))
      .on('close', res)
  );
}
