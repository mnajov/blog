import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BolgModule } from './modules/bolg/bolg.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    MongooseModule.forRoot('mongodb+srv://allayar2:kJY17o9W9l0bBvvp@nestjsblog.8kkdju2.mongodb.net/?retryWrites=true&w=majority&appName=nestjsBlog'),
    UserModule,
    AuthModule,
    BolgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


//pL2qnjP4y2Z37AGK
//allayar_2000