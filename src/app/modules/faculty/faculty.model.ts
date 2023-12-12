import mongoose, { Schema, model } from 'mongoose';
import validator from 'validator';
import { TFaculty, TFacultyName } from './faculty.interface';

const facultyNameSchema = new Schema<TFacultyName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  middleName: {
    type: String,
    required: [true, 'First name is required'],
    validate: {
      validator: (value: string) => validator.isEmpty(value),
      message: 'Midlle name required',
    },
  },
  lastName: {
    type: String,
    required: [true, 'Last Name needed'],
  },
});

const fucltySchema = new Schema<TFaculty>({
  id: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User must requird'],
    unique: true,
    ref: 'User',
  },
  designation: {
    type: String,
  },
  name: facultyNameSchema,
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'Must be gender your value {VALUE}',
    },
  },
  dataOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email is rquired'],
    unique: true,
    validate: {
      validator: async function (value: string) {
        const existingEmail = await mongoose
          .model('faculty')
          .findOne({ email: value });
        return !existingEmail;
      },
      message: 'Email must be unique. the email "{VALUE} is already exist" ',
    },
  },
  contactNo: {
    type: String,
    required: [true, 'Contact no is required'],
  },
  emergencyContactNo: {
    type: String,
  },
  bloadGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    required: [true, 'Academic Department is required'],
    unique: true,
    ref: 'AcademicDepartment',
  },
  isDeleted: {
    type: Boolean,
  },
});

export const faculty = model<TFaculty>('faculty', fucltySchema);
