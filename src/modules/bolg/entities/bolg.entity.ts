import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/commond/base/base.entity';
import { User } from 'src/modules/user/entities/user.entity';
export type BolgDocument = HydratedDocument<Bolg>;
@Schema()
export class Bolg extends BaseEntity {
  @Prop({ type: String, required: true })
  title: string;
  @Prop({ type: String, required: true })
  text: string;
  @Prop({ type: Number, default: 0 })
  count: number;
  @Prop({ type: String, default: '.logo512.png' })
  image: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;
}
export const bolgSchema = SchemaFactory.createForClass(Bolg);
