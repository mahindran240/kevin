import React from 'react'
import useAsync from '../hooks/useAsync'
import { fetchNotifications } from '../services/api'
import Spinner from '../components/Spinner'

export default function Notifications(){
  const { loading, error, data } = useAsync(fetchNotifications, [])

  return (
    <div>
      <h2>Notifications</h2>
      {loading && <Spinner />}
      {error && <div className="error">Failed to load notifications, showing mock data.</div>}
      <ul className="list">
        {data && data.map(n=> (
          <li key={n.id} className="card">
            {n.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
