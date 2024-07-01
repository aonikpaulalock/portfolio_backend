import { z } from "zod";
import { userRole } from "./user.constant";

const passwordValidationSchema = z.string()
  .min(8, "Password must be at least 8 characters long");


const createUserValidation = z.object({
  username: z.string(),
  email: z.string(),
  password: passwordValidationSchema,
  role: z.enum([...userRole] as [string, ...string[]]).default("user")
})

const loginUserValidation = z.object({
  email: z.string(),
  password: passwordValidationSchema,
})

// const changePasswordValidation = z.object({
//   currentPassword: passwordValidationSchema,
//   newPassword: passwordValidationSchema,
// })

export const UserValidations = {
  createUserValidation,
  loginUserValidation,
  // changePasswordValidation
}