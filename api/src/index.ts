import express, { Express } from "express"
import cors from "cors"
import api from "./routes/api"

const app: Express = express()

app.use(cors())
app.use("/", api)

const port = 3000
app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})