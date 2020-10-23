import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator';

@InputType()
export class EditUserInput {
  @IsMongoId()
  @Field()
  _id: string;

  @IsOptional()
  @IsNotEmpty()
  @ValidateIf((_, v) => !v)
  @Field(() => String, { nullable: true })
  phoneNumber: string;

  @IsOptional()
  @IsNotEmpty()
  @ValidateIf((_, v) => !v)
  @Field(() => String, { nullable: true })
  location: string;

  @IsOptional()
  @IsNotEmpty()
  @ValidateIf((_, v) => !v)
  @Field(() => String, { nullable: true })
  jobTitle: string;
}
