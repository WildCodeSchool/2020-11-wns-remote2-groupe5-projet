import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import Article from './Article';

@Entity()
@ObjectType()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  userID: number;

  @Column()
  @Unique(['pseudo'])
  @Field(() => String)
  pseudo: string;

  @Column()
  @Unique(['email'])
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  password: string;

  @Column()
  @Field(() => Number)
  age: number;

  @Column()
  @Field(() => String)
  city: string;

  @Column()
  @Field(() => String)
  phoneNumber: string;

  @Column()
  @Field(() => String)
  bio: string;

  @OneToMany(() => Article, (article) => article.userID)
  @Field(() => [Article])
  article: Article[];
}
