/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import TUser from './user.interface';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: [true, 'Id is rquired'],
    },
    password: {
      type: String,
      required: [true, 'Password is rquired from userSchema'],
    },
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
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this;

  user.password = await bcrypt.hash(user.password, Number(config.SALT_ROUNDS));

  next();
});

export const User = model<TUser>('User', userSchema);
