import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(){
  const activeClass = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <nav className="nav" aria-label="Primary navigation">
      <h1 className="brand">Student Dashboard</h1>
      <div className="links">
        <NavLink to="/" className={activeClass}>Dashboard</NavLink>
        <NavLink to="/students" className={activeClass}>Students</NavLink>
        <NavLink to="/courses" className={activeClass}>Courses</NavLink>
        <NavLink to="/attendance" className={activeClass}>Attendance</NavLink>
        <NavLink to="/notifications" className={activeClass}>Notifications</NavLink>
      </div>
    </nav>
  )
}
