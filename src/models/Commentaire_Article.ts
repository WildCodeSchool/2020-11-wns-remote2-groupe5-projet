import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
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
  @JoinColumn({ name: 'articleID' })
  article: Article;

  @ManyToOne(() => User, (user) => user.commentairesArticle)
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => String)
  commentaire: string;

  @Column()
  @Field(() => Date)
  date: Date;
}
