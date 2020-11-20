import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateUserInput {
  @Field()
  pseudo!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  age!: number;

  @Field()
  city!: string;

  @Field()
  phoneNumber!: string;

  @Field()
  bio!: string;
}
