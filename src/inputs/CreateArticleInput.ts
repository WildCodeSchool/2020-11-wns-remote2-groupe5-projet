import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateArticleInput {
  @Field()
  title: string;

  @Field()
  date: Date;
}
