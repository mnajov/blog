import { BaseRepository } from 'src/commond/base/base.repository';
import { User, UserDocument } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HydratedDocument, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class UserRepository extends BaseRepository<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
  async findLogin(login: string): Promise<HydratedDocument<User> | null> {
    return this.userModel.findOne({ login: login });
  }
}
