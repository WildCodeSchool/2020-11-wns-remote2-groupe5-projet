import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  userID!: number;

  @Column()
  @Unique(['pseudo'])
  @Field(() => String)
  pseudo!: string;

  @Column()
  @Unique(['email'])
  @Field(() => String)
  email!: string;

  @Column()
  @Field(() => String)
  password!: string;

  @Column()
  @Field(() => Number)
  age!: number;

  @Column()
  @Field(() => String)
  city!: string;

  @Column()
  @Field(() => String)
  phoneNumber!: string;

  @Column()
  @Field(() => String)
  bio!: string;
}
