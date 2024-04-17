import express from "express"
import { HelloController } from "../controller/hello-controller"

export const publicRouter = express.Router()

publicRouter.get("/api", HelloController.sayHello)
publicRouter.get("/api/hello", HelloController.getAll)
publicRouter.post("/api/hello", HelloController.create)
