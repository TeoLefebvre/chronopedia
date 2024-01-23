import { placementLeft, epochWidth } from "../utils/functions"
import { EpochType } from "../utils/types"
import "../style/epoch.css"

type EpochProps = {
  event: EpochType,
  interval: number[],
  zoom: number,
  line: number
}

export default function Epoch({event, interval, zoom, line}: EpochProps) {

  const left = placementLeft(event.start, interval, 20, zoom)

  return <div className="epoch" style={{
    top: `calc(50% + 50px + ${line*60}px)`,
    // // top: calc(50% + 40px);
    left: left,
    width: epochWidth(event, interval, zoom)
  }}>
    <h3 className="epoch-title">{event.title}</h3>
    <p className="epoch-date">{event.start} - {event.end}</p>
  </div>
}