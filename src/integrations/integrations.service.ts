import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Integrations } from './integrations.entity';

@Injectable()
export class IntegrationsService {
  constructor(
    @InjectRepository(Integrations)
    private integrationsRepository: Repository<Integrations>,
  ) {}

  async getIntegrations(name: string): Promise<Integrations> {
    return await this.integrationsRepository.findOne({
      name,
    });
  }
}
