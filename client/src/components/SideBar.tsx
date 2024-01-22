import { MouseEvent, MouseEventHandler, useState } from "react"
import "./sidebar.css"

type SideBarProps = {
  data: {
    title: string,
    list: string[]
  }[],
  handleSidebarOpen: MouseEventHandler
}

type ListProps = {
  title: string,
  list: string[]
}


export default function SideBar({ data, handleSidebarOpen }: SideBarProps) {

  const handleSidebarClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return <div className="sidebar-container" onClick={handleSidebarOpen}>
    <div className="sidebar" onClick={handleSidebarClick}>
      <div className="sidebar-top">
        <button type="button" onClick={handleSidebarOpen}>Fermer</button>
        <button type="button">Mon compte</button>
      </div>
      {data.map(({ title, list }) => <List key={title} title={title} list={list} />)}
    </div>
  </div>
}


function List({ title, list }: ListProps) {

  const [shown, setShown] = useState(false)

  const handleClick = () => {
    setShown(bool => !bool)
  }

  return (
    <div className="sidebar-category">
      <div className="sidebar-category-head">
        <h3>{title}</h3>
        <button type="button" onClick={handleClick}>{shown ? "Réduire" : "Déplier"}</button>
      </div>
      <nav>
        {
          shown &&
          list.map(el => <p key={el}>{el}</p>)
        }
      </nav>
    </div>
  )
}