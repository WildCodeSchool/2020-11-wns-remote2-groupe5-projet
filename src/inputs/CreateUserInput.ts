import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateUserInput {
  @Field({ nullable: true })
  pseudo: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  age: number;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  bio: string;
}
