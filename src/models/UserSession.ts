import {
  Column,
  Generated,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
} from 'typeorm';
// import { v4 } from 'uuid';
import { ObjectType, Field, ID } from 'type-graphql';
import User from './User';

@Entity()
@ObjectType()
export default class UserSession extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  sessionID: string;

  @Index()
  @Column()
  @Generated('uuid')
  uuid: string;

  @ManyToOne(() => User)
  user: User;
}
