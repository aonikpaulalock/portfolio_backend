import httpStatus from "http-status"
import { ResponseSend } from "../../../utils/ResponseSend"
import { CatchAsyncPromise } from "../../middleware/CatchAsyncPromise"
import { ExperinceServices } from "./experince.service"

const createExperinceFromDB = CatchAsyncPromise(
  async (req, res) => {
    const result = await ExperinceServices.createExperinceIntoDB(req.body)
    ResponseSend(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Experince create successful!",
      data: result
    })
  }
)

const getAllExperinceFromDB = CatchAsyncPromise(
  async (req, res) => {
    const result = await ExperinceServices.getAllExperinceIntoDB()
    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: "Experince retrieved successfully!",
      data: result,
    }
    )
  }
)

export const ExperinceControllers = {
  createExperinceFromDB,
  getAllExperinceFromDB
}