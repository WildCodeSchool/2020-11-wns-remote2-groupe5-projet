import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateCommentaireArticleInput {
  @Field()
  commentaire: string;

  @Field()
  date: string;
}
