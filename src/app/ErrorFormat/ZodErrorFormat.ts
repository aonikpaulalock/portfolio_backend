import { ZodError, ZodIssue } from "zod";

export const ZodErrorFormat = (err: ZodError) => {

  const errorMessage = err?.issues?.map((issue: ZodIssue) => `${issue.path.join('.')} ${issue.message}`).join(". ");

  const statusCode = 400
  return {
    statusCode,
    message: "Validation Error",
    errorMessage,
    errorDetails: err
  }
}