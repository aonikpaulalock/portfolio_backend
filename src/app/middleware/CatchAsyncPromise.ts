import { NextFunction, Request, RequestHandler, Response } from "express";

export const CatchAsyncPromise = (func: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err))
  }
}