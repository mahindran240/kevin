import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'

export default function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container">
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}
