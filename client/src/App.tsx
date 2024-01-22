import './app.css'
import { useState } from "react"
import ToolBar from "./components/ToolBar"
import SideBar from "./components/SideBar"
import Timeline from './components/Timeline'
import CreationBar from "./components/CreationMenu"
import { timeline } from './components/Timeline/timeline'

export default function App() {

  const data = {
    topbar: {
      timelineTitle: "Ma première frise",
      timelineStart: 1900,
      timelineEnd: 2000
    },
    sidebar: [
      {
        title: "Mes classes",
        list: ["2G5", "1S9", "TS9"]
      },
      {
        title: "Mes frises",
        list: ["1ère GM", "2ème GM"]
      },
      {
        title: "Participants",
        list: ["Téo", "Alexis", "Arthur"]
      }
    ]
  }

  let [sidebarDisplay, setSidebarDisplay] = useState(false)

  const handleSidebarOpen = () => {
    setSidebarDisplay(bool => !bool)
  }

  let [zoom, setZoom] = useState(100) // en %

  return <>
    {sidebarDisplay && <SideBar data={data.sidebar} handleSidebarOpen={handleSidebarOpen}/>}
    <div className="app">
      <div className="col left">
        <ToolBar
          timelineTitle={data.topbar.timelineTitle} 
          timelineStart={data.topbar.timelineStart} 
          timelineEnd={data.topbar.timelineEnd}
          handleSidebarOpen={handleSidebarOpen}
          handleZoom={setZoom}
          zoom={zoom}
        />
        <Timeline zoom={zoom} timeline={timeline}/>
      </div>
      <div className="col">
        <CreationBar />
      </div>
    </div>
  </>
}