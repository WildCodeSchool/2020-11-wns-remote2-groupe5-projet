import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import User from './User';

@Entity()
@ObjectType()
export default class Experience extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  experienceID: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  jobName: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  company: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  dateStart: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  dateEnd: string;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  isActualJob: boolean;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description: string;
}
