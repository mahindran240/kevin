import React from 'react'
import useAsync from '../hooks/useAsync'
import { fetchCourses } from '../services/api'
import Spinner from '../components/Spinner'

export default function Courses(){
  const { loading, error, data: courses } = useAsync(fetchCourses, [])

  return (
    <div>
      <h2>Courses</h2>
      {loading && <Spinner />}
      {error && <div className="error">Failed to load courses, showing mock data.</div>}
      <ul className="list">
        {courses && courses.map(c=> (
          <li key={c.id} className="card">
            <div>
              <strong>{c.title}</strong>
              <div>{c.instructor}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
