/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import httpStatus from "http-status"
import { ResponseSend } from "../../../utils/ResponseSend"
import { CatchAsyncPromise } from "../../middleware/CatchAsyncPromise"
import { UserServices } from "./user.service"

const createUser = CatchAsyncPromise(
  async (req, res, next) => {
    const result = await UserServices.createUserIntoDB(req.body)
    ResponseSend(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User registered successfully",
      data: result
    })
  }
)
const loginUser = CatchAsyncPromise(
  async (req, res, next) => {
    const result = await UserServices.loginUserIntoDB(req.body)
    ResponseSend(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User login successful",
      data: result
    })
  }
)

const changePassword = CatchAsyncPromise(
  async (req, res, next) => {
    const userId = req.userPayload._id
    const result = await UserServices.changePasswordIntoDB(userId, req.body)
    
    ResponseSend(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Password changed successfully",
      data: result
    })
  }
)



const getAllUser = CatchAsyncPromise(
  async (req, res, next) => {
    const result = await UserServices.getAllUserIntoDB()
    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: "Users retrieved successfully",
      data: result,
    }
    )
  }
)

export const UserControllers = {
  createUser,
  loginUser,
  getAllUser,
  changePassword
}