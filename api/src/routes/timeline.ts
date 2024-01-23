import express, { Request, Response, NextFunction } from "express"
import {getTimelines, getCompleteTimeline} from "../fetch"

export const router = express.Router()

router.get("/timelines", (req: Request, res: Response, next: NextFunction) => {
  if (req.query.userId) {
    getTimelines(Number(req.query.userId))
      .then(timelines => {
        res.json(timelines)
      })
  } else {
    next("Can't find timelines because no userId was specified")
  }
})

router.get("/:timelineId", (req: Request, res: Response, next: NextFunction) => {
  getCompleteTimeline(Number(req.params.timelineId))
    .then(timeline => {
      res.json(timeline)
    })
    .catch(err => {
      next(`Can't find timeline ${req.params.timelineId}`)
    })
})