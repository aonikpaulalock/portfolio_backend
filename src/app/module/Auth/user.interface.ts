/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TPasswordHistory = {
  password: string;
  changeAt: Date
}[]

// User Model
export interface TUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  historyOfPassword?: TPasswordHistory
}

export type TUserRole = keyof typeof USER_ROLE

// Put all user instance methods in this interface:
export interface UserModel extends Model<TUser> {
  validatePassword(password: string): Promise<boolean>
  isPasswordMatch(textPassword: string, hashPassord: string): Promise<boolean>
  isUserExists(userName: string): Promise<TUser>
}