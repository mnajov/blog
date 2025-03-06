import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository, MongooseModule],
})
export class UserModule {}
