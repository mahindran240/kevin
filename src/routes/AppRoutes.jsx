import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import StudentList from '../pages/StudentList'
import StudentProfile from '../pages/StudentProfile'
import Courses from '../pages/Courses'
import Attendance from '../pages/Attendance'
import Notifications from '../pages/Notifications'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/students" element={<StudentList/>} />
      <Route path="/students/:id" element={<StudentProfile/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/attendance" element={<Attendance/>} />
      <Route path="/notifications" element={<Notifications/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
