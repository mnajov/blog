import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './JwtStrategy';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    JwtModule.register({
      global: true,
      secret: 'test',
    }),
  ],
  providers: [JwtStrategy, UserService, UserRepository],
})
export class SharedModule {}
