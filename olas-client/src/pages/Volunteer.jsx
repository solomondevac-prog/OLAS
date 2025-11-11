import '../styles/Volunteer.css';

const Volunteer = () => {
  return (
    <div className="page-container volunteer">
      <section className="volunteer-hero">
        <img src="/images/volunteer-hero.jpg" alt="Volunteers teaching — OLAS volunteer programs" className="hero-image" loading="lazy" decoding="async" />
        <div className="hero-content">
          <h1>Volunteer With OLAS</h1>
          <p>Make a Difference in Latin American Science</p>
        </div>
      </section>

      <section className="volunteer-content">
        <div className="opportunities-section">
          <h2>Volunteer Opportunities</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <div className="opportunity-image placeholder"></div>
              <div className="opportunity-info">
                <h3>Science Education</h3>
                <p>Share your knowledge with students and aspiring scientists</p>
                <ul className="requirements">
                  <li>Background in science or education</li>
                  <li>4-6 hours per week</li>
                  <li>Remote or in-person options</li>
                </ul>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-image placeholder"></div>
              <div className="opportunity-info">
                <h3>Research Mentorship</h3>
                <p>Guide and support emerging researchers in their projects</p>
                <ul className="requirements">
                  <li>Advanced degree required</li>
                  <li>2-3 hours per week</li>
                  <li>Virtual mentoring</li>
                </ul>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-image placeholder"></div>
              <div className="opportunity-info">
                <h3>Community Outreach</h3>
                <p>Help organize and run science events in local communities</p>
                <ul className="requirements">
                  <li>No specific background required</li>
                  <li>Flexible schedule</li>
                  <li>Local presence needed</li>
                </ul>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h2>Benefits of Volunteering</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Professional Growth</h3>
              <ul>
                <li>Network with scientists</li>
                <li>Gain teaching experience</li>
                <li>Develop leadership skills</li>
                <li>Receive mentorship</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Personal Development</h3>
              <ul>
                <li>Make a meaningful impact</li>
                <li>Cultural exchange</li>
                <li>Language practice</li>
                <li>Community connection</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Recognition</h3>
              <ul>
                <li>Volunteer certificate</li>
                <li>Reference letters</li>
                <li>Performance rewards</li>
                <li>Featured stories</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="testimonials-section">
          <h2>Volunteer Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image placeholder"></div>
              <blockquote>
                "Volunteering with OLAS has been an incredible journey of growth and impact. 
                I've met amazing people and learned so much while giving back to the community."
              </blockquote>
              <p className="testimonial-author">- Dr. Ana Silva, Brazil</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image placeholder"></div>
              <blockquote>
                "The opportunity to mentor young scientists has been truly rewarding. 
                It's inspiring to see their progress and enthusiasm for science."
              </blockquote>
              <p className="testimonial-author">- Prof. Carlos Ruiz, Mexico</p>
            </div>
          </div>
        </div>

        <div className="application-section">
          <h2>Ready to Join Us?</h2>
          <p>Take the first step towards making a difference in Latin American science</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose Your Role</h3>
              <p>Select from our various volunteer opportunities</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Apply Online</h3>
              <p>Fill out our simple application form</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Get Training</h3>
              <p>Complete our volunteer orientation program</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Start Volunteering</h3>
              <p>Begin your journey with OLAS</p>
            </div>
          </div>
          <button className="start-btn">Start Application</button>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;