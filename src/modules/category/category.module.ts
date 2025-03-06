import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category, categorySchema } from './entities/category.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryRepository } from './category.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: categorySchema,
      },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}
