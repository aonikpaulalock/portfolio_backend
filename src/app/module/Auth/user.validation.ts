import { z } from "zod";
import { userRole } from "./user.constant";

const passwordValidationSchema = z.string()
  .refine((password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password)
  }, {
    message: "must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit"
  })


const createUserValidation = z.object({
  username: z.string(),
  email: z.string(),
  password: passwordValidationSchema,
  role: z.enum([...userRole] as [string, ...string[]])
})

const loginUserValidation = z.object({
  username: z.string(),
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