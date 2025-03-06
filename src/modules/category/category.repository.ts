import { BaseRepository } from 'src/commond/base/base.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category, categoryDocument } from './entities/category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

export class CategoryRepository extends BaseRepository<
  Category,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<categoryDocument>,
  ) {
    super(categoryModel);
  }

  async findName(name: string): Promise<HydratedDocument<Category>> {
    return this.categoryModel.findOne({ name: name });
  }
}
