import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/auth/user.entity';
import { CreateUserInput } from './create-user-input';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(createUserInput: CreateUserInput) {
    const { email, username, password } = createUserInput;
    const user = this.userRepository.create({
      email,
      username,
      password,
    });

    return await this.userRepository.save(user);
  }
}
