import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ChallengeDocument = HydratedDocument<Challenge>;

@Schema()
export class Challenge {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manager',
    required: true,
  })
  createBy: string;
}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);
