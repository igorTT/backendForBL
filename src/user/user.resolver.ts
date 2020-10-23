import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';

import { EditUserInput } from './edit-user.input';
import { CreateUserInput } from './create-user-input';
import { UserService } from './user.service';
import { UserType } from './user.type';
import { ValidationPipe } from '@nestjs/common';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserType])
  users(): Promise<UserType[]> {
    return this.userService.getUsers();
  }

  @Mutation(() => UserType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserType)
  editUser(
    @Args('editUserInput', ValidationPipe) editUserInput: EditUserInput,
  ) {
    return this.userService.editUser(editUserInput);
  }
}
