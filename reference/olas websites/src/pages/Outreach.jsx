import React from 'react'
import { Link } from 'react-router-dom'

export default function Outreach(){
  return (
    <div>
      <header className="hero-section">
        <div className="hero-overlay">
          <h1>Our Services & Outreach</h1>
          <p>Engaging with our community to provide support, resources, and educational opportunities.</p>
        </div>
      </header>

      <main className="content-sections">
        <section id="support-section" className="content-section">
          <h2>Student Support Services</h2>
          <p>We provide counseling, academic advising, and wellness programs to all enrolled students.</p>
        </section>

        <section id="outreach-section" className="content-section">
          <h2>Local Community Outreach Programs</h2>
          <p>Through volunteer programs and resource sharing, we aim to address local needs and enrich the lives of our neighbors.</p>
          <Link to="/volunteer" className="link-button">Get Involved: Volunteer Today</Link>
        </section>
      </main>
    </div>
  )
}
