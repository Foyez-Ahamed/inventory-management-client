import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/Route.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <AuthProvider>

    <QueryClientProvider client={queryClient}>

    <HelmetProvider>
    <div>
     <RouterProvider router={Route}></RouterProvider>
    </div>
    </HelmetProvider>

    </QueryClientProvider>

    </AuthProvider>
    

  </React.StrictMode>
)
