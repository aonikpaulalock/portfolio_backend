import httpStatus from "http-status"
import { ResponseSend } from "../../../utils/ResponseSend"
import { CatchAsyncPromise } from "../../middleware/CatchAsyncPromise"
import { BlogsServices } from "./blogs.service"

const CreateBlogsFromDB = CatchAsyncPromise(
  async (req, res) => {
    const result = await BlogsServices.createBlogsIntoDB(req.body)
    ResponseSend(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Blogs create successful",
      data: result
    })
  }
)

const getAllBlogsFromDB = CatchAsyncPromise(
  async (req, res) => {
    const result = await BlogsServices.getAllBlogsIntoDB()
    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: "Blogs retrieved successfully",
      data: result,
    }
    )
  }
)

export const BlogsControllers = {
  CreateBlogsFromDB,
  getAllBlogsFromDB
}