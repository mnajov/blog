import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsNumber()
  count: number;
  @IsNumber()
  price: number;
  @IsString()
  categoryId: string;
}
