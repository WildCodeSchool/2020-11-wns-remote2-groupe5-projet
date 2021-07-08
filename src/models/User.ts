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
import Diploma from './Diploma';
import CommentaireArticle from './Commentaire_Article';
import LikeArticle from './LikeArticle';
import Community from './Community';

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

  @OneToMany(() => Diploma, (diplomas) => diplomas.user)
  @Field(() => [Diploma])
  diplomas: Diploma[];

  @OneToMany(() => LikeArticle, (likesArticle) => likesArticle.article)
  @Field(() => [LikeArticle])
  likesArticle: LikeArticle[];

  @OneToMany(
    () => CommentaireArticle,
    (commentaireArticle) => commentaireArticle.article
  )
  @Field(() => [CommentaireArticle])
  commentairesArticle: CommentaireArticle[];

  @OneToMany(() => Community, (community) => community.user)
  @Field(() => [Community], { nullable: true })
  communities: Community[];

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

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  avatarFileName: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }
}
