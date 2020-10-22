import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateIntegrationInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @Field(() => [ID], { defaultValue: [] })
  users: string[];
}
