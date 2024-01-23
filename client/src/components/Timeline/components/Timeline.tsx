import { useEffect, useRef, useState } from "react"
import "../style/timeline.css"
import { DateType, EpochType, TimelineType } from "../utils/types"
import { algorithm_card, algorithm_epoch } from "../utils/functions"
import Marker from "./Marker"
import Date from "./Date"
import Epoch from "./Epoch"

type TimelineProps = {
  zoom: number,
  timeline: TimelineType
}

export default function Timeline({zoom, timeline}: TimelineProps) {

  const timelineRef = useRef<HTMLDivElement>(null)
  let [dateEvent, setDateEvent] = useState<DateType[]>([])
  let [epochEvent, setEpochEvent] = useState<EpochType[][]>([])
  const interval = [timeline.start, timeline.end]

  useEffect(() => {
    if (timelineRef.current) {
      setDateEvent(algorithm_card(timeline.events.dates, timelineRef.current.offsetWidth, zoom, interval))
      setEpochEvent(algorithm_epoch(timeline.events.epochs))
    }
  }, [zoom])

  let bars = []
  for (let i = interval[0]; i < interval[1]; i += Math.round((interval[1] - interval[0]) * (100/zoom) / 8)) {
    bars.push(<Marker key={i} type="bar" date={i} interval={interval} zoom={zoom}/>)
  }
  bars.push(<Marker key={"end"} type="bar" date={interval[1]} interval={interval} zoom={zoom} />)

  let cards = []
  for (const date of dateEvent) {
    cards.push(<Date key={date.id} event={date} interval={interval} zoom={zoom}/>)
  }

  let epochs =  []
  for (let i = 0; i < epochEvent.length; i++) {
    let line = epochEvent[i]
    for (const epoch of line) {
      epochs.push(<Epoch key={epoch.id} event={epoch} interval={interval} zoom={zoom} line={i} />)
    }
  }
  
  return <div className="timeline" ref={timelineRef} >
    <div className="line" style={{width: `${zoom}%`}}></div>
    {bars}
    {cards}
    {epochs}
  </div>
}