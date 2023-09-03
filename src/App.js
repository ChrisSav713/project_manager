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
//import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const authIsReady = true
  const user = true

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' index element={<Dashboard />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='/create' element={<Create />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
