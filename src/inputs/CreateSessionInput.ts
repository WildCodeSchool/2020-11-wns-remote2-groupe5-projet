import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateSessionInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  rememberMe: boolean;
}
