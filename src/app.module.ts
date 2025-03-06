import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product/product.module';
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
    CategoryModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    ProductModule,
    UserModule,
    AuthModule,
    BolgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
