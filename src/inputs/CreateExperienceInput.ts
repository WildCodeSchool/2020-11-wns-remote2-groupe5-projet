import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateExperienceInput {
  @Field({ nullable: true })
  jobName: string;

  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  dateStart: Date;

  @Field({ nullable: true })
  dateEnd: Date;

  @Field({ nullable: true })
  isActualJob: boolean;

  @Field({ nullable: true })
  description: string;
}
