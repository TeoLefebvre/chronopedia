import { MouseEvent, MouseEventHandler, useRef } from "react"
import { placementLeft } from "./functions"
import "./marker.css"

type MarkerProps = {
  type: string,
  date: number
  interval: number[],
  zoom: number,
  onMouseEnter?: MouseEventHandler,
  onMouseLeave?: MouseEventHandler
}

export default function Marker({type, date, interval, zoom, onMouseEnter, onMouseLeave}: MarkerProps) {

  const markerRef = useRef<HTMLDivElement>(null)

  let ajustement = -18 // -18 pour remettre au bon endroit le point qui avait été décallé pour centré le texte (cf css)
  ajustement += type === "bar" ? -2 : -5
  ajustement += 20 // pour compenser le margin-left sur la ligne (cf css)

  const handleMouseEnter = (event: MouseEvent) => {
    if (markerRef.current)
      markerRef.current.style.cursor = "pointer"
    if (onMouseEnter)
      onMouseEnter(event)
  }

  return <div ref={type === "point" ? markerRef : null} className={`marker ${type}`} onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave} style={{
      left: placementLeft(date, interval, ajustement, zoom)
    }}>
      {type === "bar" ? date : null}
  </div>
}