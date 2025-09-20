import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginAuthDto } from './dto/login-auth.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  create(@Body() createAuthDto: loginAuthDto) {
    console.log(createAuthDto)
    return this.authService.login(createAuthDto);
  }

  @Post('reg')
  reg(@Body() dto: CreateUserDto) {
    return this.authService.reg(dto);
  }
}
