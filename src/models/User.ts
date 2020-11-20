import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  userID!: number;

  @Column()
  @Field(() => String)
  pseudo!: string;

  @Column()
  @Field(() => String)
  email!: string;

  @Column()
  @Field(() => String)
  password!: string;

  @Column()
  @Field(() => Number)
  age!: number;

  @Column()
  @Field(() => String)
  city!: string;

  @Column()
  @Field(() => Number)
  phoneNumber!: number;

  @Column()
  @Field(() => String)
  bio!: string;
}
