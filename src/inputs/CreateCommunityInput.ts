import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateCommunityInput {
  @Field({ nullable: true })
  community: string;
}
