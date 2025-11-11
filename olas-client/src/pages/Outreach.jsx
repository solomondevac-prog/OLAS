import '../styles/Outreach.css';

const Outreach = () => {
  return (
    <div className="page-container outreach">
      <section className="outreach-hero">
        <img src="/images/outreach-hero.jpg" alt="Community outreach activities — OLAS in action" className="hero-image" loading="lazy" decoding="async" />
        <div className="hero-content">
          <h1>Community Outreach</h1>
          <p>Connecting Science with Communities Across Latin America</p>
        </div>
      </section>

      <section className="outreach-content">
        <div className="initiatives-section">
          <h2>Current Initiatives</h2>
          <div className="initiatives-grid">
            <div className="initiative-card">
              <div className="initiative-image placeholder"></div>
              <div className="initiative-info">
                <h3>Science Education Program</h3>
                <p>Bringing hands-on science education to schools in underserved communities</p>
                <ul className="initiative-stats">
                  <li>50+ Schools</li>
                  <li>1000+ Students</li>
                  <li>10 Countries</li>
                </ul>
                <button className="learn-more-btn">Get Involved</button>
              </div>
            </div>

            <div className="initiative-card">
              <div className="initiative-image placeholder"></div>
              <div className="initiative-info">
                <h3>Community Workshops</h3>
                <p>Empowering communities through scientific knowledge and practical skills</p>
                <ul className="initiative-stats">
                  <li>Monthly Events</li>
                  <li>Free Access</li>
                  <li>Expert Speakers</li>
                </ul>
                <button className="learn-more-btn">Join Workshop</button>
              </div>
            </div>

            <div className="initiative-card">
              <div className="initiative-image placeholder"></div>
              <div className="initiative-info">
                <h3>Environmental Projects</h3>
                <p>Working with local communities on conservation and sustainability</p>
                <ul className="initiative-stats">
                  <li>20+ Projects</li>
                  <li>Community-Led</li>
                  <li>Sustainable Impact</li>
                </ul>
                <button className="learn-more-btn">View Projects</button>
              </div>
            </div>
          </div>
        </div>

        <div className="impact-section">
          <h2>Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">5000+</div>
              <p>Students Reached</p>
            </div>
            <div className="impact-card">
              <div className="impact-number">100+</div>
              <p>Communities Served</p>
            </div>
            <div className="impact-card">
              <div className="impact-number">30+</div>
              <p>Active Programs</p>
            </div>
            <div className="impact-card">
              <div className="impact-number">15</div>
              <p>Partner Countries</p>
            </div>
          </div>
        </div>

        <div className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="month">DEC</span>
                <span className="day">15</span>
              </div>
              <div className="event-details">
                <h3>Science Fair 2025</h3>
                <p>Annual showcase of student projects and research</p>
                <p className="event-location">🌎 Virtual Event</p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="month">JAN</span>
                <span className="day">20</span>
              </div>
              <div className="event-details">
                <h3>Community Workshop Series</h3>
                <p>Sustainable agriculture practices for local communities</p>
                <p className="event-location">📍 Multiple Locations</p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="month">FEB</span>
                <span className="day">05</span>
              </div>
              <div className="event-details">
                <h3>Environmental Summit</h3>
                <p>Discussing climate change impacts and solutions</p>
                <p className="event-location">📍 São Paulo, Brazil</p>
              </div>
            </div>
          </div>
        </div>

        <div className="get-involved">
          <h2>Get Involved</h2>
          <div className="involvement-options">
            <div className="option-card">
              <h3>Volunteer</h3>
              <p>Join our team of dedicated volunteers making a difference in communities</p>
              <button className="action-btn">Sign Up Now</button>
            </div>
            <div className="option-card">
              <h3>Partner With Us</h3>
              <p>Collaborate with OLAS on community outreach initiatives</p>
              <button className="action-btn">Contact Us</button>
            </div>
            <div className="option-card">
              <h3>Support Our Work</h3>
              <p>Contribute to our mission of advancing science education</p>
              <button className="action-btn">Donate</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outreach;