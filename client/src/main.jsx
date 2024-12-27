import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Success from './pages/Success.jsx'
import Cancel from './pages/Cancel.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "success",
        element : <Success/>
      },
      {
        path : "cancel",
        element : <Cancel/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)