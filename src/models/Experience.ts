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
export default class Experience extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  experienceID: string;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  jobName: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  company: string;

  @Column({ nullable: true })
  @Field(() => Date, { nullable: true })
  dateStart: Date;

  @Column({ nullable: true })
  @Field(() => Date, { nullable: true })
  dateEnd: Date;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  isActualJob: boolean;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description: string;
}
