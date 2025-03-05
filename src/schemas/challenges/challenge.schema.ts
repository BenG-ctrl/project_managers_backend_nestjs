import { Schema, Document, Types } from 'mongoose';

export const ChallengeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: Types.ObjectId, ref: 'User', required: true }, // Reference to the manager who created the challenge
});

export interface Challenge extends Document {
  title: string;
  description: string;
  createdBy: Types.ObjectId; // Reference to the User model
}
