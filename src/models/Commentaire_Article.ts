import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import Article from './Article';
import User from './User';

@Entity()
@ObjectType()
export default class CommentaireArticle extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  contentFieldID: string;

  @ManyToOne(() => Article)
  @Field(() => Article)
  article: Article;

  @ManyToOne(() => User, (user) => user.commentairesArticle)
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => String)
  commentaire: string;

  @Column()
  @Field(() => String)
  date: string;
}
