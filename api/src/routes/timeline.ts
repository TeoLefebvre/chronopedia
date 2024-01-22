import express, { Request, Response, NextFunction } from "express"
import { getTimeline } from "../fetch"

export const router = express.Router()

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  getTimeline(Number(req.params.id))
    .then(timeline => {
      
    })
})