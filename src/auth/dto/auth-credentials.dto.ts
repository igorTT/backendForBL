import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4, { message: 'Name is too short' })
  @MaxLength(20)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3, { message: 'Password is too short' })
  @MaxLength(20)
  password: string;
}
