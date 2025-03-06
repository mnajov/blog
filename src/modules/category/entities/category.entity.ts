import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/commond/base/base.entity';
export type categoryDocument = HydratedDocument<Category>;
@Schema()
export class Category extends BaseEntity {
  @Prop({ required: true, unique: true, type: String })
  name: string;
}

export const categorySchema = SchemaFactory.createForClass(Category);
