import mongoose, { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
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

const guardianSchema = new Schema<Guardian>({
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

const localGuradianSchema = new Schema<LocalGuardian>({
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

const studentSchema = new Schema<Student>({
  id: { type: String },
  password: {
    type: String,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is rquired'],
  },
  gender: ['male', 'female'],
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
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuradianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

export const StudentModel = model<Student>('Student', studentSchema);
