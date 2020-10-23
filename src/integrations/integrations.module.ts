import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Integrations } from './integrations.entity';
import { IntegrationsResolver } from './integrations.resolver';
import { IntegrationsService } from './integrations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Integrations])],
  providers: [IntegrationsResolver, IntegrationsService],
})
export class IntegrationsModule {}
