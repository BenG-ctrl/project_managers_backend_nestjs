import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ManagerDocument = HydratedDocument<Manager>;

@Schema()
export class Manager {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'manager' })
  role: string;
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);
