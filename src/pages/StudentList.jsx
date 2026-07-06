import React from 'react'
import { Link } from 'react-router-dom'
import useAsync from '../hooks/useAsync'
import { fetchStudents } from '../services/api'
import Spinner from '../components/Spinner'

export default function StudentList(){
  const { loading, error, data: students } = useAsync(fetchStudents, [])

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="page-subtitle">Browse the full roster and review student profiles.</p>
          <h2>Student List</h2>
        </div>
      </div>

      {loading && <Spinner />}
      {error && <div className="error">Failed to load students, showing mock data.</div>}

      {students && students.length > 0 ? (
        <ul className="list">
          {students.map(s => (
            <li key={s.id} className="card">
              <div>
                <strong>{s.name}</strong>
                <div>{s.major}</div>
              </div>
              <Link to={`/students/${s.id}`} className="button">View</Link>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <div className="empty-state">No students found yet.</div>
      )}
    </section>
  )
}
