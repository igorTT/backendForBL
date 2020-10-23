import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Integrations } from './integrations.entity';
import { CreateIntegrationInput } from './integrations.input';

@Injectable()
export class IntegrationsService {
  constructor(
    @InjectRepository(Integrations)
    private integrationsRepository: Repository<Integrations>,
  ) {}

  async integrations(): Promise<Integrations[]> {
    return await this.integrationsRepository.find();
  }

  async getIntegrationByName(name: string): Promise<Integrations> {
    return await this.integrationsRepository.findOne({
      name,
    });
  }

  async createIntegration(
    createIntegrationInput: CreateIntegrationInput,
  ): Promise<Integrations> {
    const { name, users } = createIntegrationInput;
    const integration = this.integrationsRepository.create({
      name,
      users,
    });

    return await this.integrationsRepository.save(integration);
  }

  async assignUserToIntegration(
    integrationId: string,
    userIds: string[] = [],
  ): Promise<Integrations> {
    console.log(integrationId);
    const integration = await this.integrationsRepository.findOne(
      integrationId,
    );

    if (!integration) {
      throw new NotFoundException();
    }

    integration.users = [...new Set([...integration.users, ...userIds])];

    return await this.integrationsRepository.save(integration);
  }
}
