import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  naem: string;
}
