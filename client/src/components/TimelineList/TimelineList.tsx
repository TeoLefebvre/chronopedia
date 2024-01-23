import "./timelinelist.css"
import "./style.css"
import { TimelineType } from "../Timeline/utils/types"

type TimelineListProps = {
  timelines: TimelineType[]
}

export default function TimelineList({timelines}: TimelineListProps) {

  return <>
    <div className="bg"></div>
    <div className="topbar">
      <a><h1 id="title">Chronopédia</h1></a>
    </div>
    <div className="container">
      <h1 className="page-title">Mes frises</h1>
      <ul className="list">
        {timelines.map(timeline => {
          return <a key={timeline.id} href={`/timeline/${timeline.id}`} className="list-element">{timeline.title}</a>
        })}
      </ul>
    </div>
  </>
}