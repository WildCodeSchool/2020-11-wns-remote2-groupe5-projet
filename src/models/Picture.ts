import {
  Column,
  Generated,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export default class Picture extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id!: string;

  @Index()
  @Column()
  @Generated('uuid')
  @Field(() => ID, { nullable: true })
  id!: string;

  @Column()
  @Field(() => String, { nullable: true })
  extension!: string;
}
