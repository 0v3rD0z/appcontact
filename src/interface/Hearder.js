import React from 'react'

export default function Hearder() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">AppContact</a>
          <ul className="navbar-nav">
            <li className="nav-item ml-auto">
              <a href="/" className="nav-link">Acceuil</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}