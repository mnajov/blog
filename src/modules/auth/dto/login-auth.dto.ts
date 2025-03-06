import { IsNotEmpty, IsString } from 'class-validator';

export class loginAuthDto {
  @IsString()
  @IsNotEmpty()
  login: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
