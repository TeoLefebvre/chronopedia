import { MouseEventHandler } from "react"
import "../style/toolbar.css"

type Props = {
  timelineTitle?: string,
  timelineStart: number,
  timelineEnd: number,
  handleSidebarOpen: MouseEventHandler,
  zoom: number,
  handleZoom: React.Dispatch<React.SetStateAction<number>>
}

export default function ToolBar({ timelineTitle, timelineStart, timelineEnd, handleSidebarOpen, zoom, handleZoom }: Props) {
  
  const zoomIn = () => {
    handleZoom(v => v+10)
  }

  const zoomOut = () => {
    handleZoom(v => v-10 > 0 ? v-10 : 1)
  }

  return <div className="toolbar">
    <div className="toolbar-left">
      <button type="button" onClick={handleSidebarOpen}>Menu</button>
      <input type="text" value={timelineTitle} readOnly />
      <p>{timelineStart} - {timelineEnd}</p>
      <button type="button" onClick={zoomIn}>zoom</button>
      <button type="button" onClick={zoomOut}>dezoom</button>
      <input type="number" min={1} value={zoom} onChange={(e) => {
        if (e.currentTarget.value)
          handleZoom(Math.max(parseInt(e.currentTarget.value), 1))
      }} />
    </div>
    <div className="toolbar-right">
      <button type="button">+ Nouvel événement</button>
    </div>
  </div>
}