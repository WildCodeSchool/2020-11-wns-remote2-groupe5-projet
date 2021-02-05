import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateDiplomaInput {
  @Field({ nullable: true })
  diplomaName: string;

  @Field({ nullable: true })
  school: string;

  @Field({ nullable: true })
  dateStart: Date;

  @Field({ nullable: true })
  dateEnd: Date;

  @Field({ nullable: true })
  isActualSchool: boolean;

  @Field({ nullable: true })
  description: string;
}
