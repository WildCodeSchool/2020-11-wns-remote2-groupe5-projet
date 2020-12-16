import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateContentFieldInput {
  @Field()
  contentTypeID: string;

  @Field()
  content: string;

  @Field()
  placeNumber: number;
}
