import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/Route.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <AuthProvider>
    <HelmetProvider>
    <div className='className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-10 lg:py-5'>
     <RouterProvider router={Route}></RouterProvider>
     <Toaster/>
    </div>
    </HelmetProvider>
    </AuthProvider>
    

  </React.StrictMode>
)
