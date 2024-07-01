import mongoose from "mongoose";


export const CastErrorFormat = (err: mongoose.Error.CastError) => {
  const errorMessage = `${err?.value} is not a valid Id`
  const errorDetails = {
    stringValue: err?.value,
    valueType: err?.kind,
    kind: err?.kind,
    value: err?.value,
    path: err?.path,
    reason: err?.reason,
    name: err?.name,
    message: err?.message,
  }

  // const errorDetails = err;
  const statusCode = 400
  return {
    statusCode,
    message: "Invalid ID",
    errorMessage,
    errorDetails,
  }
}