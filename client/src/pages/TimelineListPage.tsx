import { useEffect, useState } from "react"
import TimelineList from "../components/TimelineList/TimelineList"
import { TimelineType } from "../components/Timeline/utils/types"
import { useSearchParams } from "react-router-dom"

export default function TimelineListPage() {

  let [timelines, setTimelines] = useState<TimelineType[]>([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    let username = searchParams.get("username")
    if (username) {
      fetch(`http://localhost:3000/api/user/${username}`)
        .then(response => {
          if (response.ok)
            return response.json()
          throw response
        })
        .then(user => {
          return fetch(`http://localhost:3000/api/timeline/timelines?userId=${user.id}`)
        })
        .then(response => {
          if (response.ok)
            return response.json()
          throw response
        })
        .then(timelines => {
          setTimelines(timelines)
        })
        .catch(err => {
          console.log("Error while fetching data", err)
        })
    }
  }, [])
  
  return <TimelineList timelines={timelines}/>
}