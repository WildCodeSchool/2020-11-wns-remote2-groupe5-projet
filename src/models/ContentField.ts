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
import ContentType from './ContentType';

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

  @ManyToOne(() => ContentType)
  @JoinColumn({ name: 'contentTypeID' })
  @Field(() => ContentType)
  contentType: ContentType;

  @Column()
  @Field(() => ID)
  contentTypeID: string;

  @Column()
  @Field(() => String)
  content: string;

  @Column()
  @Field(() => Number)
  placeNumber: number;
}
