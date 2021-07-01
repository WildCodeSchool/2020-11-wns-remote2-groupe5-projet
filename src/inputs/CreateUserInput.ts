import { InputType, Field } from 'type-graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export default class CreateUserInput {
  @Field({ nullable: true })
  @MaxLength(20)
  pseudo: string;

  @Field({ nullable: true })
  @MaxLength(40)
  email: string;

  @Field({ nullable: true })
  @MinLength(8)
  password: string;

  @Field({ nullable: true })
  age: number;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  bio: string;

  @Field({ nullable: true })
  avatarFileName: string;
}
