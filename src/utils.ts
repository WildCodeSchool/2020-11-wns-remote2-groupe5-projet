import { createWriteStream, mkdirSync } from 'fs';
import path from 'path';
import { Stream } from 'stream';

const PICTURES_DIRECTORY = path.join(__dirname, '../public/media/pictures');

export function writeFileToPicturesDirectory(
  stream: Stream,
  filename: string
): Promise<void> {
  mkdirSync(PICTURES_DIRECTORY, { recursive: true });
  return new Promise((res) =>
    stream
      .pipe(createWriteStream(path.join(PICTURES_DIRECTORY, filename)))
      .on('close', res)
  );
}
