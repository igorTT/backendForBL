/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Integrations')
export class IntegrationsType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => [String])
  users: string[];
}
