import { Response } from "express";
type ResponseData<T> = {
  success: boolean;
  statusCode: number;
  message?: string;
  data: T

}
export const ResponseSend = <T>(res: Response, data: ResponseData<T>) => {
  return res.status(data.statusCode).json({
    success: data.success,
    statusCode:data.statusCode,
    message: data.message,
    data: data.data
  })
}