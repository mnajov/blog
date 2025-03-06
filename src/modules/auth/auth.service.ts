import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginAuthDto } from './dto/login-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ResData } from 'src/lib/resData';

@Injectable()
export class AuthService {
  constructor(
    private readonly userservice: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async login(dto: loginAuthDto) {
    const user = await this.userservice.findLogin(dto.login);
    if (user && user.password === dto.password) {
      const data = {
        data: user,
        accToken: await this.jwtService.signAsync({
          login: user.login,
          id: user.id,
        }),
      };
      return new ResData(200, 'success', data);
    }
    throw new UnauthorizedException('password or login is incorrect');
  }

  async reg(dto: CreateUserDto) {
    const data = await this.userservice.findLogin(dto.login);
    if (data) throw new UnauthorizedException('login is alredy exist');
    return this.userservice.create(dto);
  }
}
