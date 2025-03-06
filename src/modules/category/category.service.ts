import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { BaseService } from 'src/commond/base/base.service';
import { Category } from './entities/category.entity';
import { CategoryRepository } from './category.repository';
import { HydratedDocument } from 'mongoose';

@Injectable()
export class CategoryService extends BaseService<
  Category,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor(private readonly categoryRepository: CategoryRepository) {
    super(categoryRepository);
  }
  async findName(name: string): Promise<HydratedDocument<Category>> {
    return await this.categoryRepository.findName(name);
  }
}
