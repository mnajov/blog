import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BaseService } from 'src/commond/base/base.service';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService extends BaseService<
  Product,
  CreateProductDto,
  UpdateProductDto
> {
  constructor(private readonly productRepository: ProductRepository) {
    super(productRepository);
  }
}
