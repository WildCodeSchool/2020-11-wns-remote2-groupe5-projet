import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export default class Avatar extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  avatarID!: string;

  @Column()
  @Field(() => String)
  title!: string;

  @Column()
  @Field(() => String)
  author!: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isPublished!: boolean;
}
