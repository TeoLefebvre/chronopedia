import { useRef } from "react"
import "../style/timeline.css"
import { DateType, EpochType, TimelineType } from "../utils/types"
import { algorithm_card, algorithm_epoch } from "../utils/functions"
import Marker from "./Marker"
import Date from "./Date"
import Epoch from "./Epoch"

type TimelineProps = {
  zoom: number,
  timeline?: TimelineType
}

export default function Timeline({zoom, timeline}: TimelineProps) {

  const timelineRef = useRef<HTMLDivElement>(null)

  let bars = []
  let cards = []
  let epochs = []
  let dateEvent: DateType[] = []
  let epochEvent: EpochType[][] = [[]]
  if (timeline) {
    for (let i = timeline.start; i < timeline.end; i += Math.round((timeline.end - timeline.start) * (100/zoom) / 8)) {
      bars.push(<Marker key={i} type="bar" date={i} interval={[timeline.start, timeline.end]} zoom={zoom}/>)
    }
    bars.push(<Marker key={"end"} type="bar" date={timeline.end} interval={[timeline.start, timeline.end]} zoom={zoom} />)
    
    if (timelineRef.current) {
      dateEvent = algorithm_card(timeline.dates, timelineRef.current.offsetWidth, zoom, [timeline.start, timeline.end])
      for (const date of dateEvent) {
        cards.push(<Date key={date.id} event={date} interval={[timeline.start, timeline.end]} zoom={zoom}/>)
      }

      epochEvent = algorithm_epoch(timeline.epochs)
      for (let i = 0; i < epochEvent.length; i++) {
        let line = epochEvent[i]
        for (const epoch of line) {
          epochs.push(<Epoch key={epoch.id} event={epoch} interval={[timeline.start, timeline.end]} zoom={zoom} line={i} />)
        }
      }
    }
  }

  console.log("render")
  
  return <div className="timeline" ref={timelineRef} >
    <div className="line" style={{width: `${zoom}%`}}></div>
    {bars}
    {cards}
    {epochs}
  </div>
}