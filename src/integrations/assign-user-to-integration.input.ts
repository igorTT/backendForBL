import { Field, ID, InputType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class AssignUserToIntegrationInput {
  @IsMongoId()
  @Field(() => ID)
  integrationId: string;

  @IsMongoId()
  @Field(() => [ID])
  userIds: string[];
}
