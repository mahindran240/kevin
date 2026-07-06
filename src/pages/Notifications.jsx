import React from 'react'
import useAsync from '../hooks/useAsync'
import { fetchNotifications } from '../services/api'
import Spinner from '../components/Spinner'

export default function Notifications(){
  const { loading, error, data } = useAsync(fetchNotifications, [])

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="page-subtitle">Stay on top of recent alerts with a polished notifications feed.</p>
          <h2>Notifications</h2>
        </div>
      </div>

      {loading && <Spinner />}
      {error && <div className="error">Failed to load notifications, showing mock data.</div>}

      {data && data.length > 0 ? (
        <ul className="list">
          {data.map(n => (
            <li key={n.id} className="card">
              {n.text}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <div className="empty-state">No notifications available.</div>
      )}
    </section>
  )
}
