import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"
import { logger } from "../application/logger"
import { APIError } from "../error/api-error"
import { Response as ResponseHelper } from "../helper/response-helper"

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ZodError) {
    logger.error(
      `Error status 400, Validation Error, ${JSON.stringify(error.message)}`,
    )

    return res
      .status(400)
      .json(
        ResponseHelper.toJsonError(
          false,
          "Validation Error!",
          JSON.parse(error.message),
        ),
      )
  } else if (error instanceof APIError) {
    logger.error(`Error status ${error.status}, ${error.message}`)
    return res
      .status(error.status)
      .json(ResponseHelper.toJsonError(false, error.message))
  } else {
    logger.error(`Error status 500, ${error.message}`)
    return res
      .status(500)
      .json(ResponseHelper.toJsonError(false, error.message))
  }
}
