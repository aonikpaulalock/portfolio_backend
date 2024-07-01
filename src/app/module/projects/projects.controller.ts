import httpStatus from "http-status"
import { ResponseSend } from "../../../utils/ResponseSend"
import { CatchAsyncPromise } from "../../middleware/CatchAsyncPromise"
import { ProjectsServices } from "./projects.service"

const createProjectFromDB = CatchAsyncPromise(
  async (req, res) => {
    const result = await ProjectsServices.createProjectIntoDB(req.body)
    ResponseSend(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Project create successful!",
      data: result
    })
  }
)

const getAllProjectsFromDB = CatchAsyncPromise(
  async (req, res) => {
    const result = await ProjectsServices.getAllProjectsIntoDB()
    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: "Projects retrieved successfully!",
      data: result,
    }
    )
  }
)

export const ProjectsControllers = {
  createProjectFromDB,
  getAllProjectsFromDB
}