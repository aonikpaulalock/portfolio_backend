"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const user_constant_1 = require("./user.constant");
const passwordValidationSchema = zod_1.z.string()
    .min(8, "Password must be at least 8 characters long");
const createUserValidation = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string(),
    password: passwordValidationSchema,
    role: zod_1.z.enum([...user_constant_1.userRole]).default("user")
});
const loginUserValidation = zod_1.z.object({
    email: zod_1.z.string(),
    password: passwordValidationSchema,
});
// const changePasswordValidation = z.object({
//   currentPassword: passwordValidationSchema,
//   newPassword: passwordValidationSchema,
// })
exports.UserValidations = {
    createUserValidation,
    loginUserValidation,
    // changePasswordValidation
};
