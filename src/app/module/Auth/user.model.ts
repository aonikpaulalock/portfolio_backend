import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";
import { userRole } from "./user.constant";
// User Schema
const UserSchema = new Schema<TUser, UserModel>({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: userRole,
    default: 'user'
  }
}, {
  timestamps: true,
});

UserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.solt_round),
  );
  next();
});



//! Is User Exists
UserSchema.statics.isUserExists = async function (email) {
  return await User.findOne({ email })
}

//! compare password body and datebase
UserSchema.statics.isPasswordMatch = async function (textPassword, hashPassword) {
  return await bcrypt.compare(textPassword, hashPassword)
}

//! replace password and historyOfPassword field
UserSchema.methods.toJSON = function () {
  const cloneObj = this.toObject();
  delete cloneObj.password;
  return cloneObj;
};



export const User = model<TUser, UserModel>("User", UserSchema)