import { PartialType } from '@nestjs/mapped-types';
import { CreateBolgDto } from './create-bolg.dto';

export class UpdateBolgDto extends PartialType(CreateBolgDto) {}
