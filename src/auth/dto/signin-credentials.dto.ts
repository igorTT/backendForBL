import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignInCredentialsDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3, { message: 'Password is too short' })
  @MaxLength(20)
  password: string;
}
