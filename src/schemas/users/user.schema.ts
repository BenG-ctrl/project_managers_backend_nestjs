import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['coder', 'manager'], required: true },
});

export interface User extends Document {
  email: string;
  password: string;
  role: 'coder' | 'manager';
}
