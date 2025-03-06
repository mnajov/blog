import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from './entities/product.entity';
import { ProductRepository } from './product.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: productSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
