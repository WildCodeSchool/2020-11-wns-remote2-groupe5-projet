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
export default class Diploma extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  diplomaID: string;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  diplomaName: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  school: string;

  @Column({ nullable: true })
  @Field(() => Date, { nullable: true })
  dateStart: Date;

  @Column({ nullable: true })
  @Field(() => Date, { nullable: true })
  dateEnd: Date;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  isActualSchool: boolean;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description: string;
}
