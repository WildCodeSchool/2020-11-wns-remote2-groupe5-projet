import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export default class ContentType extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  contentTypeID: string;

  @Column()
  @Field(() => String)
  type: string;
}
