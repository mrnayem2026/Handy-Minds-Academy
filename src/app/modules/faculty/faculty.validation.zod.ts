import mongoose from 'mongoose';
import { z } from 'zod';

// Define Zod schema for facultyName
const facultyNameSchemaZod = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  middleName: z.string().min(1, { message: 'Middle name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
});

// Define Zod schema for faculty
export const facultyValidationSchema = z.object({
  fauclty: z.object({
    id: z.string(),
    user: z.string(),
    designation: z.string(),
    name: facultyNameSchemaZod,
    gender: z.enum(['male', 'female']),
    dataOfBirth: z.string(),
    email: z
      .string()
      .email({ message: 'Invalid email format' })
      .refine(
        async (value) => {
          const existingEmail = await mongoose
            .model('faculty')
            .findOne({ email: value });
          return !existingEmail;
        },
        { message: 'Email must be unique. The email "{value}" already exists' },
      ),
    contactNo: z.string().min(1, { message: 'Contact no is required' }),
    emergencyContactNo: z.string(),
    bloadGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    profileImg: z.string(),
    academicDepartment: z.string().refine(
      async (value) => {
        const existingDepartment = await mongoose
          .model('AcademicDepartment')
          .findById(value);
        return !!existingDepartment;
      },
      { message: 'Invalid Academic Department' },
    ),
    isDeleted: z.boolean(),
  }),
});

export default facultyValidationSchema;
