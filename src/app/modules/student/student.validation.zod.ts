import { z } from 'zod';

const UserNameZodValidationSchema = z.object({
  firstName: z.string().min(1, {
    message: 'First name is required and must be at least 1 character long.',
  }),
  middleName: z.string(),
  lastName: z.string().min(1, {
    message: 'Last name is required and must be at least 1 character long.',
  }),
});

const GuardianZodValidationSchema = z.object({
  fatherName: z.string().min(1, {
    message: "Father's name is required and must be at least 1 character long.",
  }),
  fatherOccupation: z.string().min(1, {
    message:
      "Father's occupation is required and must be at least 1 character long.",
  }),
  fatherContactNo: z.string().min(1, {
    message:
      "Father's contact number is required and must be at least 1 character long.",
  }),
  motherName: z.string().min(1, {
    message: "Mother's name is required and must be at least 1 character long.",
  }),
  motherOccupation: z.string().min(1, {
    message:
      "Mother's occupation is required and must be at least 1 character long.",
  }),
  motherContactNo: z.string().min(1, {
    message:
      "Mother's contact number is required and must be at least 1 character long.",
  }),
});

const LocalGuardianZodValidationSchema = z.object({
  name: z.string().min(1, {
    message:
      "Local guardian's name is required and must be at least 1 character long.",
  }),
  email: z.string().email(),
  occupation: z.string().min(1, {
    message:
      "Local guardian's occupation is required and must be at least 1 character long.",
  }),
  contactNo: z.string().min(1, {
    message:
      "Local guardian's contact number is required and must be at least 1 character long.",
  }),
  address: z.string().min(1, {
    message:
      "Local guardian's address is required and must be at least 1 character long.",
  }),
});

const StudentZodValidationSchema = z.object({
  body: z.object({
    student: z.object({
      id: z.string(),
      password: z.string().min(6),
      name: UserNameZodValidationSchema,
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.string(),
      email: z.string().email({ message: 'Invalid email format.' }),
      contactNo: z.string().min(1, {
        message:
          'Contact number is required and must be at least 1 character long.',
      }),
      emergencyContactNo: z.string().min(1, {
        message:
          'Emergency contact number is required and must be at least 1 character long.',
      }),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string().min(1, {
        message:
          'Present address is required and must be at least 1 character long.',
      }),
      permanentAddress: z.string().min(1, {
        message:
          'Permanent address is required and must be at least 1 character long.',
      }),
      guardian: GuardianZodValidationSchema,
      localGuardian: LocalGuardianZodValidationSchema,
      profileImg: z.string(),
      isActive: z.enum(['active', 'blocked']),
    }),
  }),
});

export default StudentZodValidationSchema;
