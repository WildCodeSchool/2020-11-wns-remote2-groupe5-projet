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
import ContentField from './ContentField';
import CommentaireArticle from './Commentaire_Article';
import Like_Article from './Like_Article';

@Entity()
@ObjectType()
export default class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  articleID: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userID' })
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => ID)
  userID: string;

  @OneToMany(
    () => CommentaireArticle,
    (commentaireArticle) => commentaireArticle.article
  )
  @Field(() => [CommentaireArticle])
  commentairesArticle: CommentaireArticle[];

  @OneToMany(() => Like_Article, (likesArticle) => likesArticle.article)
  @Field(() => [Like_Article])
  likesArticle: Like_Article[];

  @OneToMany(() => ContentField, (contentField) => contentField.article)
  @Field(() => [ContentField])
  contentFields: ContentField[];

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => Date)
  date: Date;

  @Column()
  @Field(() => String)
  description: string;
}
