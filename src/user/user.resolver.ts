import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './create-user-input';
import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver(of => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(returns => UserType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}
