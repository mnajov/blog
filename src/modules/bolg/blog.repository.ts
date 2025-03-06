import { BaseRepository } from 'src/commond/base/base.repository';
import { Bolg, BolgDocument } from './entities/bolg.entity';
import { CreateBolgDto } from './dto/create-bolg.dto';
import { UpdateBolgDto } from './dto/update-bolg.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class BlogRepository extends BaseRepository<
  Bolg,
  CreateBolgDto,
  UpdateBolgDto
> {
  constructor(
    @InjectModel(Bolg.name) private readonly blogModel: Model<BolgDocument>,
  ) {
    super(blogModel);
  }

  async findAll(): Promise<Bolg[]> {
    return this.blogModel.find().populate('author').exec();
  }
}
