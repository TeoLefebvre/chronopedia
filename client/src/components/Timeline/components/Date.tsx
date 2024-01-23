import { useRef } from "react"
import Marker from "./Marker"
import { placementLeft } from "../utils/functions"
import { DateType } from "../utils/types"
import "../style/date.css"

type DateProps = {
  event: DateType,
  interval: number[],
  zoom: number
}

export default function Date({event, interval, zoom}: DateProps) {

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.boxShadow = "0px 0px 15px -5px black"
      cardRef.current.style.cursor = "pointer"
    }
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.boxShadow = "0px 0px 20px -10px black"
    }
  }

  return <div>
    <Marker 
      key={event.id} 
      type="point" 
      date={event.start} 
      interval={interval} 
      zoom={zoom} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    />
    <div className="card-container" style={{
      left: placementLeft(event.start, interval, -75 + 20, zoom) // -75 car c'est la moitié de la width de la carte (cf css) +20 pour compenser le margin-left de la ligne 
    }}>
      <div className="card" ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3 className="card-title">{event.title}</h3>
        <p className="card-date">{event.start}</p>
        {event.place && <p className="card-place">{event.place}</p>}
      </div>
      <div className="card-bar"></div>
    </div>
  </div> 
}