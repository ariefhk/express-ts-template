import { logger } from "./application/logger"
import { web } from "./application/web"

const PORT = process.env.PORT ?? 3000

web.listen(PORT, () => {
  logger.info("Listening on port: " + PORT)
})
