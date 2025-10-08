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



    UserModule,
    AuthModule,
    BolgModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


//pL2qnjP4y2Z37AGK
//allayar_2000