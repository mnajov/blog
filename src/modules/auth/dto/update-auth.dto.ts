import { PartialType } from '@nestjs/mapped-types';
import { loginAuthDto } from './login-auth.dto';

export class UpdateAuthDto extends PartialType(loginAuthDto) {}
