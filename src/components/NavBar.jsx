import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(){
  return (
    <nav className="nav">
      <h1 className="brand">Student Dashboard</h1>
      <div className="links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/attendance">Attendance</NavLink>
        <NavLink to="/notifications">Notifications</NavLink>
      </div>
    </nav>
  )
}
