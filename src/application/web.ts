import cors from "cors"
import express from "express"
import { rateLimit } from "express-rate-limit"
import { ErrorController } from "../controller/not-found-controller"
import { Response } from "../helper/response-helper"
import { errorMiddleware } from "../middleware/error-middleware"
import { privateRouter } from "../route/private-route"
import { publicRouter } from "../route/public-route"

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers,
  handler: (req, res, next, options) =>
    res
      .status(options.statusCode)
      .json(Response.toJsonError(false, "Too many Request!")),
})

export const web = express()

web.use(limiter)
web.use(cors())
web.use(express.urlencoded({ extended: true }))
web.use(express.json())
web.use(publicRouter)
web.use(privateRouter)
web.get("*", ErrorController.routeNotFound)
web.use(errorMiddleware)
