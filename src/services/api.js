import axios from 'axios'
import studentsMock from '../mock/students.json'
import coursesMock from '../mock/courses.json'
import attendanceMock from '../mock/attendance.json'
import notificationsMock from '../mock/notifications.json'

// Intentionally invalid base URL to trigger fallback to mock data in catch
const INVALID_BASE = 'https://invalid.api'

export async function fetchStudents(){
  try{
    const res = await axios.get(`${INVALID_BASE}/students`)
    return res.data
  }catch(err){
    // fallback to mock
    return new Promise(resolve=> setTimeout(()=> resolve(studentsMock), 400))
  }
}

export async function fetchStudent(id){
  try{
    const res = await axios.get(`${INVALID_BASE}/students/${id}`)
    return res.data
  }catch(err){
    const s = studentsMock.find(x=> String(x.id) === String(id))
    return new Promise(resolve=> setTimeout(()=> resolve(s || null), 300))
  }
}

export async function fetchCourses(){
  try{
    const res = await axios.get(`${INVALID_BASE}/courses`)
    return res.data
  }catch(err){
    return new Promise(resolve=> setTimeout(()=> resolve(coursesMock), 300))
  }
}

export async function fetchAttendance(){
  try{
    const res = await axios.get(`${INVALID_BASE}/attendance`)
    return res.data
  }catch(err){
    return new Promise(resolve=> setTimeout(()=> resolve(attendanceMock), 300))
  }
}

export async function fetchNotifications(){
  try{
    const res = await axios.get(`${INVALID_BASE}/notifications`)
    return res.data
  }catch(err){
    return new Promise(resolve=> setTimeout(()=> resolve(notificationsMock), 300))
  }
}
