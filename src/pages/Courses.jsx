import React from 'react'
import useAsync from '../hooks/useAsync'
import { fetchCourses } from '../services/api'
import Spinner from '../components/Spinner'

export default function Courses(){
  const { loading, error, data: courses } = useAsync(fetchCourses, [])

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="page-subtitle">Explore course offerings and instructor details.</p>
          <h2>Courses</h2>
        </div>
      </div>

      {loading && <Spinner />}
      {error && <div className="error">Failed to load courses, showing mock data.</div>}

      {courses && courses.length > 0 ? (
        <ul className="list">
          {courses.map(c => (
            <li key={c.id} className="card">
              <div>
                <strong>{c.title}</strong>
                <div>{c.instructor}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <div className="empty-state">No courses available.</div>
      )}
    </section>
  )
}
