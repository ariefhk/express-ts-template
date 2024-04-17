import { logger } from "../application/logger"

export class Response {
  static toJson(status: boolean, message: string, data?: any) {
    logger.info(message)
    return {
      status,
      message,
      data,
    }
  }

  static toJsonError(status: boolean, message: string, errors?: any) {
    logger.error(message)
    return {
      status,
      message,
      errors,
    }
  }
}
