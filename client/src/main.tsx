import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./style.css"
import TimelinePage from './pages/TimelinePage'
import HomePage from './pages/HomePage'
import ConnectionPage from './pages/ConnectionPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/timeline",
    element: <TimelinePage />,
  },
  {
    path: "/timeline/:id",
    element: <TimelinePage />
  },
  {
    path: "/connexion",
    element: <ConnectionPage />
  }
])

// function Blog() {
//   const {id} = useParams()

//   return <div>
//     C'est le blog numéro {id} !
//   </div>
// }

export default function Router () {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
