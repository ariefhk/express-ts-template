import { NextFunction, Request, Response } from "express"
import { CreateHelloRequest } from "../model/hello-model"
import { HelloService } from "../service/hello-service"

export class HelloController {
  static sayHello(req: Request, res: Response, next: NextFunction) {
    try {
      const response = HelloService.menyapa()
      return res.status(200).json(response)
    } catch (e) {
      next(e)
    }
  }

  static getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const response = HelloService.getSapaan()
      return res.status(200).json(response)
    } catch (e) {
      next(e)
    }
  }

  static create(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateHelloRequest = req.body as CreateHelloRequest
      const response = HelloService.addSapaan(request)
      return res.status(200).json(response)
    } catch (e) {
      next(e)
    }
  }
}
