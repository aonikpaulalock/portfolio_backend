/* eslint-disable @typescript-eslint/no-explicit-any */

export const DuplicateErrorFormat = (err: any) => {
  const match = err.message.match(/"([^"]*)"/)[1];
  const errorMessage = `${match} is already exists`;
  const errorDetails = {
    keyPattern: err?.keyPattern,
    keyValue: err?.keyValue,
  }
  const statusCode = 400
  return {
    statusCode,
    message: "Duplicate Key Error",
    errorMessage,
    errorDetails
  }
}