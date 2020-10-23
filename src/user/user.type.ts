import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IntegrationsType } from 'src/integrations/integrations.type';

@ObjectType('User')
export class UserType {
  @Field(() => ID)
  _id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => String, { nullable: true })
  jobTitle?: string;

  @Field(() => [IntegrationsType], { nullable: true })
  integrations?: string[];
}
