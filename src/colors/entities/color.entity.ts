import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ColorDocument = Color & Document;

@Schema()
export class Color {
  @Prop()
  color_primary: string;

  @Prop()
  color_background: string;

  @Prop()
  color_text: string;
}
