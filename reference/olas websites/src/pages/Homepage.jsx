import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage(){
  return (
    <div>
      <header className="hero-section">
        <nav className="navbar--hero">
          {/* hero nav is handled by main Navbar component but kept minimal here */}
        </nav>
        <div className="hero-content">
          <h1>Excellence, Integrity, and Innovation</h1>
          <p>A nurturing environment where futures are built and dreams take flight.</p>
          <div className="button-container">
            <Link to="/about" className="school-button primary">About Our School</Link>
            <Link to="/research" className="school-button secondary">Research & Publications</Link>
            <Link to="/outreach" className="school-button tertiary">Services & Outreach</Link>
          </div>
        </div>
      </header>

      <main className="core-values-container">
        <section id="vision-mission" className="value-card vision-card">
          <h2>Our Vision</h2>
          <p>
            Our Lady of the Angels Seminary-College envisions a Christ-Centered Filipino
            Catholic Franciscan Educational Community continuously transformed by the
            Gospel values.
          </p>
        </section>

        <section className="value-card mission-card">
          <h2>Our Mission</h2>
          <p>
            Our Lady of the Angels Seminary-College commits to facilitate the
            opportunity for the school/community a Christ-centered, Culture-based Promoters
            of Franciscan Ideals leading towards a renewed society in the service of God and country
          </p>
        </section>
      </main>

      <section id="values" className="values-section">
        <h2>Core values</h2>
        <div className="values-grid">
          <div className="values-item"><h3>1. God-Driven</h3><h3>2. Fraternity and Minority</h3></div>
          <div className="values-item"><h3>3. Common Good</h3></div>
          <div className="values-item"><h3>4. Reverence for all Creation</h3></div>
          <div className="values-item"><h3>5. Cultural Sensitivity</h3></div>
        </div>
      </section>
    </div>
  )
}
