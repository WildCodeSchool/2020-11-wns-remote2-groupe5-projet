import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import User from './User';
import Article from './Article';

@Entity()
@ObjectType()
export default class LikeArticle extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  likeID: string;

  @ManyToOne(() => Article)
  @JoinColumn({ name: 'articleID' })
  @Field(() => Article)
  article: Article;

  @ManyToOne(() => User, (user) => user.likesArticle)
  @Field(() => User)
  user: User;
}
