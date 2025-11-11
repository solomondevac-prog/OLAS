import { Link } from 'react-router-dom';
import '../styles/Home.css';

import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Hero from '../components/Hero';
const Home = () => {
  return (
  <div className="page-container home space-y-12 md:space-y-20">
      <Hero
        image="/images/hero-main2.png"
        imageAlt="Students and researchers collaborating at a laboratory"
        title="Excellence, Integrity, and Innovation"
        subtitle="A nurturing environment where futures are built and dreams take flight."
        primary={{ to: '/about', label: 'Learn More' }}
        secondary={{ to: '/graduate', label: 'Graduate Programs' }}
      />

      <section className="features-section py-12 md:py-16 overflow-visible" aria-label="Quick links">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="features-grid grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          <Card className="feature-card h-full flex flex-col justify-between" title="Research" footer={<Button to="/research" variant="secondary">Explore Research</Button>}>
            <div className="feature-icon" aria-hidden>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p>Discover groundbreaking research opportunities and collaborations.</p>
          </Card>

          <Card className="feature-card h-full flex flex-col justify-between" title="Graduate Programs" footer={<Button to="/graduate" variant="secondary">View Programs</Button>}>
            <div className="feature-icon" aria-hidden>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p>Find graduate programs and scholarships for Latin American students.</p>
          </Card>

          <Card className="feature-card h-full flex flex-col justify-between" title="Outreach" footer={<Button to="/outreach" variant="secondary">Get Involved</Button>}>
            <div className="feature-icon" aria-hidden>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a4 4 0 014 4v3h-8V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 14v2a6 6 0 0012 0v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p>Connect with our community and educational initiatives.</p>
          </Card>

          <Card className="feature-card h-full flex flex-col justify-between" title="Volunteer" footer={<Button to="/volunteer" variant="secondary">Start Volunteering</Button>}>
            <div className="feature-icon" aria-hidden>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p>Make a difference by joining our volunteer programs.</p>
          </Card>
          </div>
        </div>
      </section>

    <section>
      <h2 className="text-3xl md:text-3xl font-semibold text-center mb-10">Our Vision & Mission</h2>
          <div className="impact-stats grid gap-6 md:grid-cols-2">
            <div className="stat-card bg-white rounded-lg shadow-sm p-4 overflow-visible">
              <div className="max-w-md mx-auto text-center">
                <div className="w-12 h-1 bg-primary rounded mb-4 mx-auto" aria-hidden></div>
                <h3 className="text-4xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-700 text-sm">
                  Our Lady of the Angels Seminary-College envisions a Christ-Centered Filipino
                  Catholic Franciscan Educational Community continuously transformed by the
                  Gospel values.
                </p>
              </div>
            </div>

            <div className="stat-card bg-white rounded-lg shadow-sm p-4 overflow-visible">
              <div className="max-w-md mx-auto text-center">
                <div className="w-12 h-1 bg-primary rounded mb-4 mx-auto" aria-hidden></div>
                <h3 className="text-4xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-700 text-sm">
                  To empower every student to achieve personal and academic excellence, become
                  lifelong learners, and responsible, compassionate global citizens.
                </p>
              </div>
            </div>
          </div>
      </section>

      <section className="news-section py-12 md:py-16 overflow-visible">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="mb-6">Latest News</h2>
          <div className="news-grid grid gap-6 md:grid-cols-2">
            {/* Add actual news items here */}
            <div className="news-card">
              <h4>New Research Collaboration</h4>
              <p>OLAS partners with leading institutions to advance scientific research...</p>
              <span className="news-date">November 1, 2025</span>
            </div>
            <div className="news-card">
              <h4>Upcoming Conference</h4>
              <p>Join us for our annual conference featuring renowned speakers...</p>
              <span className="news-date">December 15, 2025</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;