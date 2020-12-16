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

  @OneToMany(() => Article, (articles) => articles.user)
  @Field(() => [Article])
  articles: Article[];

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

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true })
  age: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  city: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  bio: string;
}
