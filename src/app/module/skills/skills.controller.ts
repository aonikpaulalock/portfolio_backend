import httpStatus from "http-status"
import { ResponseSend } from "../../../utils/ResponseSend"
import { CatchAsyncPromise } from "../../middleware/CatchAsyncPromise"
import { SkillsServices } from "./skills.service"

const createSkillFromDB = CatchAsyncPromise(
  async (req, res) => {
    const result = await SkillsServices.createSkillIntoDB(req.body)
    ResponseSend(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Skills create successful!",
      data: result
    })
  }
)

const getAllSkillsFromDB = CatchAsyncPromise(
  async (req, res) => {
    const result = await SkillsServices.getAllSkillsIntoDB()
    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: "Skills retrieved successfully!",
      data: result,
    }
    )
  }
)

export const SkillsControllers = {
  createSkillFromDB,
  getAllSkillsFromDB
}