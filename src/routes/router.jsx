import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from '../pages/Home'
import Services from '../pages/Services'
import ServiceDetails from '../pages/ServiceDetails'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ForgotPassword from '../pages/ForgotPassword'
import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:id', element: <ProtectedRoute><ServiceDetails /></ProtectedRoute> },
      { path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'forgot', element: <ForgotPassword /> },
    ]
  }
])

export default router
