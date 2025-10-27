import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './contexts/AuthProvider'

AOS.init({ once: true, duration: 700 })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </AuthProvider>
  </React.StrictMode>,
)
