import { Schema, Document, Types } from 'mongoose';

export const SubmissionSchema = new Schema({
  challenge: { type: Types.ObjectId, ref: 'Challenge', required: true }, // Reference to the challenge
  coder: { type: Types.ObjectId, ref: 'User', required: true }, // Reference to the coder who made the submission
  solution: { type: String, required: true },
  status: { type: String, enum: ['Completed', 'Attempted'], required: true },
});

export interface Submission extends Document {
  challenge: Types.ObjectId; // Reference to the Challenge model
  coder: Types.ObjectId; // Reference to the User model
  solution: string;
  status: 'Completed' | 'Attempted';
}
