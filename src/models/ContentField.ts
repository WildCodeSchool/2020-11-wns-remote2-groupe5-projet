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

@Entity()
@ObjectType()
export default class ContentField extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  contentFieldID: string;

  @ManyToOne(() => Article)
  @JoinColumn({ name: 'articleID' })
  @Field(() => Article)
  article: Article;

  @Column()
  @Field(() => String)
  contentType: string;

  @Column()
  @Field(() => String)
  content: string;

  @Column()
  @Field(() => Number)
  placeNumber: number;
}
