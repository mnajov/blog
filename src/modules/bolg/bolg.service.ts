import { Injectable } from '@nestjs/common';
import { CreateBolgDto } from './dto/create-bolg.dto';
import { UpdateBolgDto } from './dto/update-bolg.dto';
import { BaseService } from 'src/commond/base/base.service';
import { BlogRepository } from './blog.repository';
import { Bolg } from './entities/bolg.entity';
import { ResData } from 'src/lib/resData';

@Injectable()
export class BolgService extends BaseService<
  Bolg,
  CreateBolgDto,
  UpdateBolgDto
> {
  constructor(private readonly blogRepository: BlogRepository) {
    super(blogRepository);
  }
  async create(createBaseDto: CreateBolgDto): Promise<Bolg | any> {
    return await this.blogRepository.create(createBaseDto);
  }
}
