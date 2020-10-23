import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Integrations } from './integrations/integrations.entity';
import { IntegrationsModule } from './integrations/integrations.module';

import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

import { UserGql } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URI,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Integrations, User, UserGql],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    AuthModule,
    IntegrationsModule,
    UserModule,
  ],
})
export class AppModule {}
