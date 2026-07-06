import React from 'react'
import useAsync from '../hooks/useAsync'
import { fetchAttendance } from '../services/api'
import Spinner from '../components/Spinner'

export default function Attendance(){
  const { loading, error, data } = useAsync(fetchAttendance, [])

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="page-subtitle">Track attendance quickly with a clean, responsive overview.</p>
          <h2>Attendance</h2>
        </div>
      </div>

      {loading && <Spinner />}
      {error && <div className="error">Failed to load attendance, showing mock data.</div>}

      {data && data.length > 0 ? (
        <ul className="list">
          {data.map(a => (
            <li key={a.studentId} className="card">
              <div>
                <strong>Student #{a.studentId}</strong>
                <div>Present: {a.present} — Absent: {a.absent}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <div className="empty-state">No attendance records yet.</div>
      )}
    </section>
  )
}
