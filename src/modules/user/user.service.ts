import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from '../../commond/base/base.service';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { HydratedDocument } from 'mongoose';

@Injectable()
export class UserService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly userReopository: UserRepository) {
    super(userReopository);
  }

  async findLogin(login: string): Promise<HydratedDocument<User>> {
    return await this.userReopository.findLogin(login);
  }
}
