import { Prop } from '@nestjs/mongoose';

export class BaseEntity {
  @Prop({ required: true, type: Date, default: Date.now })
  createdAt: Date;
  @Prop({ required: true, type: Date, default: Date.now })
  lastUpdateAt: Date;
}
