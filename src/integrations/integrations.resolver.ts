import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AssignUserToIntegrationInput } from './assign-user-to-integration.input';
import { CreateIntegrationInput } from './integrations.input';
import { IntegrationsService } from './integrations.service';
import { IntegrationsType } from './integrations.type';

@Resolver(of => IntegrationsType)
export class IntegrationsResolver {
  constructor(private integrationsService: IntegrationsService) {}

  @Query(() => [IntegrationsType])
  integrations() {
    return this.integrationsService.integrations();
  }

  @Query(() => IntegrationsType)
  getIntegrationByName(@Args('name') name: string) {
    return this.integrationsService.getIntegrationByName(name);
  }

  @Mutation(returns => IntegrationsType)
  createIntegration(
    @Args('createIntegrationInput')
    createIntegrationInput: CreateIntegrationInput,
  ) {
    return this.integrationsService.createIntegration(createIntegrationInput);
  }

  @Mutation(returns => IntegrationsType)
  assignUserToIntegration(
    @Args('assignUserToIntegrationInput')
    assignUserToIntegrationInput: AssignUserToIntegrationInput,
  ) {
    const { integrationId, userIds } = assignUserToIntegrationInput;
    return this.integrationsService.assignUserToIntegration(
      integrationId,
      userIds,
    );
  }
}
