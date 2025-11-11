import React from 'react'
import { Link } from 'react-router-dom'

export default function Volunteer(){
  return (
    <div className="content-sections">
      <section id="volunteer-gallery" className="gallery-section content-section">
        <h2>Hands-On Community Service</h2>
        <p>Our students and staff dedicate countless hours to local initiatives, making a tangible difference wherever they go.</p>
      </section>

      <section id="events-gallery" className="gallery-section content-section">
        <h2>Vibrant Community Events</h2>
        <p>From science fairs to cultural festivals, these gatherings strengthen bonds and celebrate our shared spirit.</p>
        <Link to="/outreach" className="link-button">Back</Link>
      </section>
    </div>
  )
}
