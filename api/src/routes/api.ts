import express, { Request, Response, NextFunction } from "express"
import { router as timeline } from "./timeline"
import { router as user } from "./user"

const router = express.Router()
router.use("/timeline", timeline)
router.use("/user", user)

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400)
  res.write(err)
  res.end()
})

export default router