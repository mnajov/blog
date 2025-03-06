import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/commond/base/base.entity';
export type ProductDocument = HydratedDocument<Product>;
@Schema()
export class Product extends BaseEntity {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ required: true, type: Number })
  count: number;
  @Prop({ required: true, type: Number })
  price: number;
}
export const productSchema = SchemaFactory.createForClass(Product);
