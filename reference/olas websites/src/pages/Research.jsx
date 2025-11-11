import React from 'react'
import { Link } from 'react-router-dom'

export default function Research(){
  return (
    <div className="content-sections">
      <section id="faculty-research-section" className="content-section">
        <h2>Current Faculty Research</h2>
        <p>Our faculty are engaged in groundbreaking research across various disciplines, contributing significantly to their fields.</p>
      </section>

      <section id="publications-section" className="content-section">
        <h2>Peer-Reviewed Publications</h2>
        <p>Explore a comprehensive collection of our academic publications, including journal articles, conference proceedings, and books produced by students and faculty.</p>
        <Link to="/" className="link-button">Back to Homepage</Link>
      </section>
    </div>
  )
}
