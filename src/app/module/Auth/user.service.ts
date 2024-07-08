import httpStatus from "http-status";
import AppError from "../../../utils/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import config from "../../config";
// import bcrypt from "bcrypt"
import { createToken } from "./user.utils";

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result
}


const loginUserIntoDB = async (
  payload:
    {
      email: string,
      password: string
    }
) => {

  const { email, password } = payload;

  //! If User Exists in database
  const user = await User.isUserExists(email as string)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found")
  }

  //! Compare pasword database to payload
  const matchPassword = await User.isPasswordMatch(password, user?.password)
  if (!matchPassword) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Don't match password")
  }

  //! Create Jwt Payload
  const secretPayload = {
    _id: user?._id,
    role: user?.role,
    email: user?.email,
  }

  //! Create Access Token 
  const accessToken = createToken(
    secretPayload,
    config.jwt_access_token as string,
    config.jwt_access_token_expire as string
  );
  return {
    user,
    accessToken
  }
}

// const changePasswordIntoDB = async (
//   userId: string,
//   payload: {
//     currentPassword: string
//     newPassword: string
//   }
// ) => {
//   const { currentPassword, newPassword } = payload
//   //! find User
//   const user = await User.findById(userId)
//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, "User not found")
//   }

//   //! Compare database password and curent password
//   if (!(await User.isPasswordMatch(
//     currentPassword, user?.password as string))) {
//     throw new AppError(
//       httpStatus.UNAUTHORIZED,
//       "Current password didn't match"
//     )
//   }

//   //! if user didn't change password 
//   if (!user.historyOfPassword) {
//     return false
//   }

//   //! last match two updated password 
//   if (isHistoryOfPassword(newPassword, user.historyOfPassword)) {
//     const lastUsedPassword = user?.historyOfPassword.slice(-1)[0];
//     const lastUsedDate = lastUsedPassword.changeAt.toLocaleString();
//     throw new AppError(
//       httpStatus.BAD_REQUEST,
//       ` Password change failed. Ensure the new password is unique and not among the last 2 used (last used on ${lastUsedDate}).`
//     )
//   }

//   // ! New Password hash
//   const hashedNewPassword = await bcrypt.hash(newPassword, Number(config.solt_round));

//   //! update and push new password and date
//   const addToPasswordHistory = await User.findByIdAndUpdate(
//     user._id,
//     {
//       password: hashedNewPassword,
//       $push: {
//         historyOfPassword: {
//           password: hashedNewPassword,
//           changeAt: new Date()
//         }
//       },
//     },
//     { new: true, runValidators: true }
//   );

//   return addToPasswordHistory
// }


const getAllUserIntoDB = async () => {
  const result = await User.find();
  return result
}

export const UserServices = {
  createUserIntoDB,
  loginUserIntoDB,
  getAllUserIntoDB,
  // changePasswordIntoDB
}