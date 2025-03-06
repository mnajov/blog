import { Model } from 'mongoose';
import { Product, ProductDocument } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepository } from 'src/commond/base/base.repository';

export class ProductRepository extends BaseRepository<
  Product,
  CreateProductDto,
  UpdateProductDto
> {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {
    super(productModel);
  }
}
