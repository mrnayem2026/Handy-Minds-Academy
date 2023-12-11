import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import { AppError } from '../../errors/AppError';

const academicDevpartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: [true, 'Academic Department Name is rquired'],
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

// this middleware create for Is department exist
// academicDevpartmentSchema.pre('save', async function (next) {
//   const isDepartmentExist = await AcademicDepartment.findOne({
//     name: this.name,
//   });

//   if (isDepartmentExist) {
//     throw new Error('This department is already exist!');
//   }
//   next();
// });

// this middleware create for check before update department
academicDevpartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDepartmentExist = await AcademicDepartment.findOne(query);

  if (!isDepartmentExist) {
    throw new Error('This department does not exist! ');
  }
  next();
});

// this middleware create for check before update name

academicDevpartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getUpdate() as { name: string };
  const name = query.name;

  const existingDepartment = await AcademicDepartment.findOne({ name });
  if (existingDepartment) {
    throw new AppError(404, 'This name is alrady exist. pleace try new name');
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDevpartmentSchema,
);
