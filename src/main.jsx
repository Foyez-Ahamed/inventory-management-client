import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <div className='className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-10 lg:py-5'>
     <RouterProvider router={Route}></RouterProvider>
     </div>
    

  </React.StrictMode>
)
