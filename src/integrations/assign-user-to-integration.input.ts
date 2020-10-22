import { Field, ID, InputType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class AssignUserToIntegrationInput {
  @IsMongoId()
  @Field(type => ID)
  integrationId: string;

  @IsMongoId()
  @Field(type => [ID])
  userIds: string[];
}
