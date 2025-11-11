import React from 'react'
import { Link } from 'react-router-dom'

export default function Graduate(){
  return (
    <div className="content-sections">
      <section id="programs-section" className="content-section">
        <h2>Graduate Programs</h2>
        <p>Our Graduate School offers a diverse range of master's and doctoral programs designed to prepare leaders and innovators.</p>
      </section>

      <section id="application-section" className="content-section">
        <h2>Application Requirements & Deadlines</h2>
        <p>The Graduate School accepts applications on a rolling basis. We require a bachelor's degree, a statement of purpose, and letters of recommendation.</p>
        <Link to="/" className="link-button">Back to Homepage</Link>
      </section>
    </div>
  )
}
