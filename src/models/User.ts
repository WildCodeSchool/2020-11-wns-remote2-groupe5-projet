import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import Article from './Article';
import { hash } from 'bcrypt';
import Experience from './Experience';

@Entity()
@ObjectType()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  userID: number;

  @OneToMany(() => Article, (articles) => articles.user)
  @Field(() => [Article])
  articles: Article[];

  @OneToMany(() => Experience, (experiences) => experiences.user)
  @Field(() => [Experience])
  experiences: Experience[];

  @Column()
  @Unique(['pseudo'])
  @Field(() => String)
  pseudo: string;

  @Column()
  @Unique(['email'])
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  password: string;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true })
  age: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  city: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  bio: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }
}
