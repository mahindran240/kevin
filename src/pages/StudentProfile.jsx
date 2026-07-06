import React from 'react'
import { useParams } from 'react-router-dom'
import useAsync from '../hooks/useAsync'
import { fetchStudent } from '../services/api'
import Spinner from '../components/Spinner'

export default function StudentProfile(){
  const { id } = useParams()
  const { loading, error, data: student } = useAsync(()=> fetchStudent(id), [id])

  return (
    <div>
      <h2>Student Profile</h2>
      {loading && <Spinner />}
      {error && <div className="error">Failed to load profile, showing mock data.</div>}
      {student ? (
        <div className="profile">
          <h3>{student.name}</h3>
          <div><strong>Age:</strong> {student.age}</div>
          <div><strong>Major:</strong> {student.major}</div>
          <div><strong>Email:</strong> {student.email}</div>
        </div>
      ) : (
        !loading && <div>No student found.</div>
      )}
    </div>
  )
}
