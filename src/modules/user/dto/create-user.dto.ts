import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  login: string;
  @IsString()
  @IsNotEmpty()
  password: number;
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  lang: string;
  @IsString()
  @IsEnum(['client', 'admin'])
  role: string;
}
