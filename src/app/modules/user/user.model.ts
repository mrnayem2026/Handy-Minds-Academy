import { Schema, model } from 'mongoose';
import TUser from './user.interface';

const userSchema = new Schema<TUser>({
  id: {
    type: String,
    required: [true, 'Name is rquired'],
  },
  password: { type: String, required: [true, 'Password is rquired from userSchema'] },
  needsPassswordChange: { type: Boolean },
  role: {
    type: String,
    enum: ['admin', 'student', 'faculty'],
  },
  status: {
    type: String,
    enum: ['in-progress', 'blokced'],
  },
  isDeleted: { type: Boolean },
});

export const userModel = model<TUser>('User',userSchema)
