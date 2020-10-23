import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { EntityRepository, Repository } from 'typeorm';

import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const { email, password, username } = authCredentialsDto;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
