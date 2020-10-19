import { Resolver, Query, Args } from '@nestjs/graphql';
import { IntegrationsService } from './integrations.service';
import { IntegrationsType } from './integrations.type';

@Resolver(of => IntegrationsType)
export class IntegrationsResolver {
  constructor(private integrationsService: IntegrationsService) {}

  @Query(returns => IntegrationsType)
  integrations(@Args('name') name: string) {
    return this.integrationsService.getIntegrations(name);
  }
}
