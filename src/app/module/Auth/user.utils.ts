import jwt, { JwtPayload } from "jsonwebtoken"
import bcrypt from "bcrypt"
import { TPasswordHistory } from "./user.interface"

//! Create Token
export const createToken = (
  secretPayload: JwtPayload,
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(
    secretPayload,
    secret,
    { expiresIn }
  )
}

//! Verify token
export const verifyToken = (
  token: string,
  secret: string
) => {
  return jwt.verify(token, secret);
}

//! Password history
export const isHistoryOfPassword = (
  newPassword: string, passwordHistory: TPasswordHistory) => {
  const lastTwoPasswords = passwordHistory.slice(-2);
  return lastTwoPasswords.some((entry) => bcrypt.compareSync(newPassword, entry.password));
}