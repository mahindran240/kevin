import React from 'react'
import { Link } from 'react-router-dom'
import useAsync from '../hooks/useAsync'
import { fetchStudents } from '../services/api'
import Spinner from '../components/Spinner'

export default function StudentList(){
  const { loading, error, data: students } = useAsync(fetchStudents, [])

  return (
    <div>
      <h2>Student List</h2>
      {loading && <Spinner />}
      {error && <div className="error">Failed to load students, showing mock data.</div>}
      <ul className="list">
        {students && students.map(s=> (
          <li key={s.id} className="card">
            <div>
              <strong>{s.name}</strong>
              <div>{s.major}</div>
            </div>
            <Link to={`/students/${s.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
