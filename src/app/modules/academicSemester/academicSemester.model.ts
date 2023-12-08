import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterMonth,
  AcademicSemesterName,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: [true, 'Name is rquired'],
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: [true, 'Year is rquired'],
    },
    code: {
      type: String,
      required: [true, 'Code is rquired'],
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: [true, 'Start Month is rquired'],
      enum: AcademicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: [true, 'End Month is rquired'],
      enum: AcademicSemesterMonth,
    },
  },
  {
    timestamps: true,
  },
);



academicSemesterSchema.pre('save', async function(next){
  const isSemesterExist = await AcademicSemester.findOne({
    year: this.year,
    name: this.name
  })

  if(isSemesterExist){
    throw new Error('Semester is already exists !');
  }

  next()
})


export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
