import { z } from 'zod';

export const usernameValidation = z
  .string()
  .min(2, { message: 'Username must be at least 2 characters long' })
  .max(20, { message: 'Username must be at most 20 characters long' })
  .regex(/^[a-zA-Z0-9]+(?:[ _-][a-zA-Z0-9]+)*$/, { message: 'Username must contain only alphanumeric characters and spaces' })

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: 'Please fill a valid e-mail address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})