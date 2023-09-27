// styles
import './App.css'
import Signup from '../src/pages/signup/Signup'
import Login from '../src/pages/login/Login'
import Dashboard from '../src/pages/dashboard/Dashboard'
import Project from '../src/pages/project/Project'
import Create from '../src/pages/create/Create'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuthContext } from './hooks/useAuthContext'
import OnlineUsers from './components/OnlineUsers'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            <Navbar />
            <Routes>
              <Route
                exact
                path='/'
                element={
                  user ? <Dashboard /> : <Navigate to='/login' replace />
                }
              />
              <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to='/' replace />}
              />
              <Route
                path='/signup'
                element={!user ? <Signup /> : <Navigate to='/' replace />}
              />
              <Route
                path='/projects/:id'
                element={user ? <Project /> : <Navigate to='/login' replace />}
              />
              <Route
                path='/create'
                element={user ? <Create /> : <Navigate to='/login' replace />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
