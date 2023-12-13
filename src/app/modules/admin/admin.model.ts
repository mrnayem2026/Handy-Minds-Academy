import { Schema, model } from 'mongoose';
import { TAdmin, TAdminName } from './admin.interface';
import { BloodGroup, Gender } from './admin.constants';

const adminNameSchema = new Schema<TAdminName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    max: [20, 'You give more then 20 charector'],
  },
  middleName: {
    type: String,
    trim: true,
    min: [3, 'You give less then 3 charector'],
  },
  lastName: {
    type: String,
    trim: true,
  },
});

const adminSchema = new Schema<TAdmin>({
  id: {
    type: String,
    required: [true, 'Id is must required'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  designation: {
    type: String,
  },
  name: {
    type: adminNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: Gender,
      message: '{VALUE is not a valid gender}',
    },
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Must needed email'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact Number is required'],
  },
  emergencyContactNo: {
    type: String,
  },
  bloogGroup: {
    type: String,
    enum: {
      values: BloodGroup,
      message: '{VALUE} is not blood group',
    },
  },
  permanentAddress: {
    type: String,
  },
  presentAddress: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
  },
});

export const Admin = model<TAdmin>('Admin', adminSchema);
