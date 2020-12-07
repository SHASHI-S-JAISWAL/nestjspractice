import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SettingDocument = Setting & Document;

@Schema()
export class Setting {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  configuration: string;

  @Prop({ required: true })
  username: string;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
