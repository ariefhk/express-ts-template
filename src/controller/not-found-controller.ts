import { NextFunction, Request, Response } from "express"
import { Response as ResponseHelper } from "../helper/response-helper"

export class ErrorController {
  static routeNotFound(req: Request, res: Response, next: NextFunction) {
    try {
      return res
        .status(404)
        .json(ResponseHelper.toJsonError(false, "Route tidak ditemukan!"))
    } catch (e) {
      next(e)
    }
  }
}
