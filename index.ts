import express from 'express'
import { PORT } from 'shared/config'
import logger from 'shared/logger'
import helmet from 'helmet'

const app = express()

app.use(helmet)

app.listen(PORT, () => {
  logger.info(`API started on port ${PORT}`)
})
