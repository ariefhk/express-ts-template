import cors from "cors"
import express from "express"

// import { errorMiddleware } from "../middleware/error-middleware"
// import { publicRouter } from "../route/public-route"

export const web = express()

web.use(cors())
web.use(express.urlencoded({ extended: true }))
web.use(express.json())
// web.use(publicRouter)
// web.use(errorMiddleware)
