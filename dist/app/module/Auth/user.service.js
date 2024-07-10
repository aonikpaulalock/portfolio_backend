"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../../utils/AppError"));
const user_model_1 = require("./user.model");
const config_1 = __importDefault(require("../../config"));
// import bcrypt from "bcrypt"
const user_utils_1 = require("./user.utils");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(payload);
    return result;
});
const loginUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    //! If User Exists in database
    const user = yield user_model_1.User.isUserExists(email);
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    //! Compare pasword database to payload
    const matchPassword = yield user_model_1.User.isPasswordMatch(password, user === null || user === void 0 ? void 0 : user.password);
    if (!matchPassword) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Don't match password");
    }
    //! Create Jwt Payload
    const secretPayload = {
        _id: user === null || user === void 0 ? void 0 : user._id,
        role: user === null || user === void 0 ? void 0 : user.role,
        email: user === null || user === void 0 ? void 0 : user.email,
    };
    //! Create Access Token 
    const accessToken = (0, user_utils_1.createToken)(secretPayload, config_1.default.jwt_access_token, config_1.default.jwt_access_token_expire);
    return {
        user,
        accessToken
    };
});
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
const getAllUserIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
exports.UserServices = {
    createUserIntoDB,
    loginUserIntoDB,
    getAllUserIntoDB,
    // changePasswordIntoDB
};
