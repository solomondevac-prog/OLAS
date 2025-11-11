import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo-container">
          <img src="/1.png" alt="School Logo" className="school-logo" />
          <span className="school-name">OUR LADY OF THE ANGELS SEMINARY COLLEGE, INC.</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/graduate">Graduate</Link></li>
          <li><Link to="/outreach">Outreach</Link></li>
          <li><Link to="/volunteer">Volunteer</Link></li>
        </ul>
      </nav>
    </header>
  )
}
