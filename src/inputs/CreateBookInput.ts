import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateBookInput {
  @Field()
  title!: string;

  @Field()
  author!: string;
}
