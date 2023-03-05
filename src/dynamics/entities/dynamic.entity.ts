import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type DynamicDocument = Dynamic & Document;
@Schema()
export class Dynamic {
  @Prop()
  banner: string;
  @Prop()
  logo: string;
}

export const DynamicSchema = SchemaFactory.createForClass(Dynamic);
