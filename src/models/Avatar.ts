import path from 'path';
import { Stream } from 'stream';
import {
  Column,
  Generated,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Index,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { writeFileToPicturesDirectory } from '../utils';
import User from './User';

@Entity()
@ObjectType()
export default class Avatar extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id!: string;

  @Index()
  @Column()
  @Generated('uuid')
  @Field(() => ID)
  avatarID!: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userID' })
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => ID)
  userID: string;

  @Column()
  @Field(() => String)
  extension!: string;
}

const saveAndWritePictureToFile = async (
  originalFilename: string,
  stream: Stream,
  user: User
): Promise<Avatar> => {
  const extension = path.extname(originalFilename);
  const avatar = Avatar.create({ extension });
  avatar.user = user;
  await avatar.save();
  const newFilename = `${avatar.avatarID}${extension}`;
  await writeFileToPicturesDirectory(stream, newFilename);
  return avatar;
};

export { saveAndWritePictureToFile };
