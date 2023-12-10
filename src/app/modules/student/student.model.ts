import mongoose, { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name needed. your value is {VALUE}'],
  },
  middleName: {
    type: String,
    validate: {
      validator: (value: string) => validator.isEmpty(value),
      message: 'Middle name lagbe',
    },
  },
  lastName: {
    type: String,
    required: [true, 'Last Name needed'],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father Name is Required'],
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent>({
  id: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User Id must be required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is rquired'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
    },
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'Email Must be unique'],
    unique: true,
    validate: {
      validator: async function (value: string) {
        const existingStudent = await mongoose
          .model('Student')
          .findOne({ email: value });
        return !existingStudent;
      },
      message: "Email must be unique. The email '{VALUE}' is already taken.",
    },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuradianSchema,
  profileImg: { type: String },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not valid.',
    },
  },
  isDeleted:{
    type: Boolean,
    default:false
  }
});

export const StudentModel = model<TStudent>('Student', studentSchema);
