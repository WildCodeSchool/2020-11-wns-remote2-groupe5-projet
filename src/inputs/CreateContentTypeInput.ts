import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateContentTypeInput {
  @Field()
  type: string;
}
