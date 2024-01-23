import './timelinepage.css'
import { useEffect, useState } from "react"
import ToolBar from '../components/Timeline/components/ToolBar'
import SideBar from '../components/Timeline/components/SideBar'
import Timeline from '../components/Timeline/components/Timeline'
import CreationBar from '../components/Timeline/components/CreationMenu'
import { useParams } from 'react-router-dom'
import { TimelineType } from '../components/Timeline/utils/types'


export default function TimelinePage() {

  const {timelineId} = useParams()
  let [timeline, setTimeline] = useState<TimelineType | undefined>(undefined)

  useEffect(() => {
    if (timelineId) {
      fetch(`http://localhost:3000/api/timeline/${timelineId}`)
        .then(response => {
          if (response.ok)
            return response.json()
          throw response
        })
        .then(data => {
          setTimeline(data)
        })
        .catch(err => {
          console.log("Error while fetching data", err)
        })
    }
  }, [])

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
          timelineTitle={timeline?.title} 
          timelineStart={timeline?.start} 
          timelineEnd={timeline?.end}
          handleSidebarOpen={handleSidebarOpen}
          zoom={zoom}
          handleZoom={setZoom}
        />
        <Timeline zoom={zoom} timeline={timeline}/>
      </div>
      <div className="col">
        <CreationBar />
      </div>
    </div>
  </>
}