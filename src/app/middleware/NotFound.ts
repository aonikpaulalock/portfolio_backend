/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, RequestHandler } from "express";
import httpStatus from "http-status";

export const NotFoundRoute: RequestHandler = (req, res, next) => {
  return res.status(httpStatus.NOT_FOUND)
    .json({
      success: false,
      message: "Route not found"
    })
}