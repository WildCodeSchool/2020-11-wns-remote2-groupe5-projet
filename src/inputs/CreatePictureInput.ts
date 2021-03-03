import { Stream } from 'stream';
import { Field, InputType } from 'type-graphql';
import { ReadStream } from 'fs-capacitor';

@InputType()
export class CreatePictureInput {
  @Field(() => ReadStream)
  createReadStream!: ReadStream;

  @Field() filename!: string;

  @Field() mimetype!: string;

  @Field() encoding!: string;
}
