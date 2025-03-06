import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/commond/base/base.entity';
import { Bolg } from 'src/modules/bolg/entities/bolg.entity';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User extends BaseEntity {
  @Prop({ type: String, require: true })
  login: string;
  @Prop({ type: String, required: true })
  password: string;
  @Prop({ type: String, required: true })
  username: string;
  @Prop({ type: String, required: true })
  lang: string;
  @Prop({ type: String, default: 'client', required: true })
  role: string;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Blog' })
  posts: Bolg[];
}

export const userSchema = SchemaFactory.createForClass(User);
