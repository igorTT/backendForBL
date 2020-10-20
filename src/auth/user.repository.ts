import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ message: string }> {
    const { email, password, username } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
      return { message: user.email };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Invalid credentials');
      }

      throw new InternalServerErrorException();
    }
  }

  async validateUserPassword(
    signInCredentialsDto: SignInCredentialsDto,
  ): Promise<string> {
    const { email, password } = signInCredentialsDto;
    const user = await this.findOne({
      email,
    });

    if (user && (await user.validatePassword(password))) {
      return user.email;
    }

    return null;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
