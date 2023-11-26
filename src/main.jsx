import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/Route.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <AuthProvider>
    <HelmetProvider>
    <div>
     <RouterProvider router={Route}></RouterProvider>
    </div>
    </HelmetProvider>
    </AuthProvider>
    

  </React.StrictMode>
)
