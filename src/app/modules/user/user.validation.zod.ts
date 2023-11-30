import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .min(6, { message: 'Password must be greatir then  or equal 6' })
    .max(20, { message: 'Password must be lees then or equal 10' }),
});

export const userValidation = {
  userValidationSchema,
};
