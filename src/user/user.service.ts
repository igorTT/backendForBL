import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserInput } from './create-user-input';
import { EditUserInput } from './edit-user.input';
import { UserType } from './user.type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<UserType[]> {
    return await this.userRepository.find();
  }

  async createUser(createUserInput: CreateUserInput) {
    const { email, username, password } = createUserInput;
    const user = this.userRepository.create({
      email,
      username,
      password,
    });

    return await this.userRepository.save(user);
  }

  async editUser(editUserInput: EditUserInput) {
    const { _id } = editUserInput;
    const user = await this.userRepository.findOne(_id);

    if (!user) {
      throw new NotFoundException();
    }

    console.log('user :>> ', user);
    delete editUserInput._id;

    Object.entries(editUserInput).forEach(([key, value]) => {
      user[key] = value;
    });

    await this.userRepository.save(user);
    delete user.password;
    console.log('user :>> ', user);

    return user;
  }
}
