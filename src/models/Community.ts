import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import User from './User';
import Article from './Article';

@Entity()
@ObjectType()
export default class Community extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  communityID: string;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @OneToMany(() => Article, (article) => article.community)
  @Field(() => Article)
  article: Article;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  community: string;
}
