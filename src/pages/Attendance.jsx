import React from 'react'
import useAsync from '../hooks/useAsync'
import { fetchAttendance } from '../services/api'
import Spinner from '../components/Spinner'

export default function Attendance(){
  const { loading, error, data } = useAsync(fetchAttendance, [])

  return (
    <div>
      <h2>Attendance</h2>
      {loading && <Spinner />}
      {error && <div className="error">Failed to load attendance, showing mock data.</div>}
      <ul className="list">
        {data && data.map(a=> (
          <li key={a.studentId} className="card">
            <div>
              <strong>Student #{a.studentId}</strong>
              <div>Present: {a.present} — Absent: {a.absent}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
