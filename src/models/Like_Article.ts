import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import User from './User';
import Article from './Article';

@Entity()
@ObjectType()
export default class Like_Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  likeID: string;

  @ManyToOne(() => Article, (article) => article.likesArticle)
  @Field(() => Article)
  article: Article;

  @ManyToOne(() => User, (user) => user.likesArticle)
  @Field(() => User)
  user: User;
}
