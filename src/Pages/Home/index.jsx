import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cadastrar">cadastrar</Link></li>
          <li><Link to="/player">player</Link></li>
        </ul>
      </nav>
    </div>
  )
}
