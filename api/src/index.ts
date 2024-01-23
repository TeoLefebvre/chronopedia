import express, { Express, Request, Response, NextFunction } from "express"
import cors from "cors"
import api from "./routes/api"

const app: Express = express()

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const reqTime = new Date()
  console.log(`${reqTime.toISOString()} : ${req.method} ${req.originalUrl}`)
  next()
}

app.use(logger)
app.use(cors())
app.use("/api", api)

const port = 3000
app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})