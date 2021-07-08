import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import User from './User';

@Entity()
@ObjectType()
export default class Community extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  communityID: string;

  @ManyToOne(() => User, (user) => user.communities)
  @Field(() => User)
  user: User;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  community: string;
}
