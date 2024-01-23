import express, { Request, Response, NextFunction } from "express"
import { searchUser } from "../fetch"

export const router = express.Router()

router.get("/:username", (req: Request, res: Response, next: NextFunction) => {
  searchUser(req.params.username)
    .then(user => {
      res.json(user)
    })
    .catch(e => {
      next("Can't find user, an error occured")
    })
})