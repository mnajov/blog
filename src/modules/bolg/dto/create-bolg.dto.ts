import { IsEmpty, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateBolgDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 56)
  title: string;
  @IsString()
  @IsNotEmpty()
  @Length(25)
  text: string;
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsEmpty()
  author: string;
}
