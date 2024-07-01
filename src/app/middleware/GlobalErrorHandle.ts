/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { ZodErrorFormat } from "../ErrorFormat/ZodErrorFormat";
import { CastErrorFormat } from "../ErrorFormat/CastErrorFormat";
import { DuplicateErrorFormat } from "../ErrorFormat/DuplicateErrorFormat";
import AppError from "../../utils/AppError";

export const GlobalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

  let statusCode = 500;
  let message = err.message || "Something went wrong";
  let errorMessage = "Internal server error";
  let errorDetails = err;

  if (err instanceof ZodError) {
    const formatingEroor = ZodErrorFormat(err);
    statusCode = formatingEroor.statusCode;
    message = formatingEroor.message;
    errorMessage = formatingEroor.errorMessage;
    errorDetails = formatingEroor.errorDetails
  }
  else if (err?.name === "CastError") {
    const formatingEroor = CastErrorFormat(err);
    statusCode = formatingEroor.statusCode;
    message = formatingEroor.message;
    errorMessage = formatingEroor.errorMessage;
    errorDetails = formatingEroor.errorDetails
  }
  else if (err?.code === 11000) {
    const formatingEroor = DuplicateErrorFormat(err);
    statusCode = formatingEroor.statusCode;
    message = formatingEroor.message;
    errorMessage = formatingEroor.errorMessage;
    errorDetails = formatingEroor.errorDetails
  }
  else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorMessage = err?.message;
    errorDetails = err;
  }
  else if (err.name === "JsonWebTokenError") {
    message = "Unauthorized Access";
    errorMessage = "You do not have the necessary ;permissions to access this resource.";
    errorDetails = null;
  }

  return res.status(statusCode)
    .json({
      success: false,
      message,
      errorMessage,
      errorDetails,
      stack: err.name === "JsonWebTokenError" ? null : err.stack
    })
}