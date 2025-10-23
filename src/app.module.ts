import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BolgModule } from './modules/bolg/bolg.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { url } from 'inspector';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: async (configService:ConfigService)=>({uri:configService.get<string>('DB-URL')}),
      inject:[ConfigService]
      
    }),
    ThrottlerModule.forRoot({
      throttlers:[{ttl:10000, limit:3
      }]}),

    UserModule,
    AuthModule,
    BolgModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {provide:APP_GUARD, useClass:ThrottlerGuard}
  ],
})
export class AppModule {}


//pL2qnjP4y2Z37AGK
//allayar_2000