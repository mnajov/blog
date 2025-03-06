import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'test',
      global: true,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, UserRepository],
})
export class AuthModule {}
