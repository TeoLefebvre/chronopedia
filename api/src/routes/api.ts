import express from "express"
import { router as timeline } from "./timeline"

const router = express.Router()
router.use("/timeline", timeline)

export default router