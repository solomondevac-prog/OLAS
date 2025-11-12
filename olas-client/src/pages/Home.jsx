import '../styles/Home.css';
const logo = new URL('../assets/images/hero-main2.png', import.meta.url).href;
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Hero from '../components/Hero';
const Home = () => {
  return (
  <div className="page-container home space-y-0 bg-gradient-to-b from-white via-gray-50 to-white">
      <Hero
        image={logo}
        imageAlt="Students and researchers collaborating at a laboratory"
        title="Excellence, Integrity, and Innovation"
        subtitle="A nurturing environment where futures are built and dreams take flight."
        primary={{ to: '/about', label: 'Learn More' }}
        secondary={{ to: '/graduate', label: 'Graduate Programs' }}
      />

      <section className="features-section py-20 md:py-32 overflow-visible" aria-label="Quick links">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Our Offerings</p>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">Key Programs & Initiatives</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full mb-8"></div>
            <p className="text-gray-600 text-xl max-w-4xl leading-relaxed font-medium">Explore our comprehensive range of academic and community programs designed to foster academic excellence, spiritual growth, character development, and meaningful social impact.</p>
          </div>
          <div className="features-grid grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-10 transition-all duration-300 border-t-4 border-primary hover:border-t-8 hover:-translate-y-3 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ICTC</h3>
                <p className="text-gray-700 leading-relaxed font-medium mb-2">Inter-Congregational Theological Center</p>
                <p className="text-gray-600 leading-relaxed text-sm">Comprehensive pastoral formation, theological education, and spiritual development programs rooted in faith and contemporary scholarship.</p>
              </div>
              <Button to="/academics/ictc-pastoral" variant="secondary" className="mt-8 w-full relative z-10">Learn More</Button>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-10 transition-all duration-300 border-t-4 border-primary hover:border-t-8 hover:-translate-y-3 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Journal</h3>
                <p className="text-gray-700 leading-relaxed font-medium mb-2">SANLAKBAY & ΠΡÓΘΕΣΙΣ</p>
                <p className="text-gray-600 leading-relaxed text-sm">Discover groundbreaking research, philosophical inquiry, and theological excellence through our acclaimed student publications and pastoral formation programs.</p>
              </div>
              <Button to="/StudentJournal" variant="secondary" className="mt-8 w-full relative z-10">Explore Research</Button>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-10 transition-all duration-300 border-t-4 border-primary hover:border-t-8 hover:-translate-y-3 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Graduate Programs</h3>
                <p className="text-gray-700 leading-relaxed font-medium mb-2">Advanced Academic Pathways</p>
                <p className="text-gray-600 leading-relaxed text-sm">Rigorous master's and doctoral programs with exceptional scholarship opportunities designed for Latin American and international scholars.</p>
              </div>
              <Button to="/graduate" variant="secondary" className="mt-8 w-full relative z-10">View Programs</Button>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-10 transition-all duration-300 border-t-4 border-primary hover:border-t-8 hover:-translate-y-3 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Outreach</h3>
                <p className="text-gray-700 leading-relaxed font-medium mb-2">Community Impact</p>
                <p className="text-gray-600 leading-relaxed text-sm">Connect with our dynamic community through impactful science education, workshops, environmental projects, and social initiatives.</p>
              </div>
              <Button to="/outreach" variant="secondary" className="mt-8 w-full relative z-10">Get Involved</Button>
            </div>

          </div>
        </div>
      </section>

    <section className="vision-mission-section py-20 md:py-32 overflow-visible bg-gradient-to-r from-primary/3 via-transparent to-primary/3">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Our Foundation</p>
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">Vision & Mission</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full mb-8"></div>
          <p className="text-gray-600 text-xl max-w-4xl leading-relaxed font-medium">Rooted in Gospel values and committed to transforming lives through education, faith, and service to humanity.</p>
        </div>
        <div className="vision-mission-grid grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-stretch">
          <div className="bg-white rounded-2xl p-14 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-12 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
                <h3 className="text-5xl font-black text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed font-light text-gray-700">
                Our Lady of the Angels Seminary-College envisions a <span className="font-bold text-primary">Christ-Centered Filipino Catholic Franciscan Educational Community</span> continuously transformed by Gospel values, committed to <span className="font-semibold text-gray-900">academic excellence, spiritual growth, and service to humanity</span>. We aspire to be a beacon of hope and learning in our region and beyond.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-14 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-12 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
                <h3 className="text-5xl font-black text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed font-light text-gray-700">
                To <span className="font-bold text-primary">empower every student to achieve personal and academic excellence</span>, become <span className="font-semibold text-gray-900">lifelong learners and responsible global citizens</span> who serve the common good. We are dedicated to fostering compassion, integrity, and a transformative vision that contributes to building a more just and equitable society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="news-section py-20 md:py-32 overflow-visible">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Recent Highlights</p>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">Latest News & Updates</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full mb-8"></div>
            <p className="text-gray-600 text-xl max-w-4xl leading-relaxed font-medium">Stay connected with the latest developments, achievements, and upcoming events at Our Lady of the Angels Seminary-College.</p>
          </div>
          <div className="news-grid grid gap-8 md:grid-cols-2">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-12 border-b-2 border-primary/10 relative overflow-hidden flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex-1">
                      <h4 className="text-3xl font-bold text-gray-900 leading-tight">New Research Collaboration</h4>
                    </div>
                    <span className="inline-block px-5 py-2 bg-primary/20 text-primary font-bold rounded-full text-xs flex-shrink-0 whitespace-nowrap uppercase tracking-wider">News</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium text-lg">OLAS partners with leading national and international institutions to advance cutting-edge scientific research and theological inquiry, creating unprecedented opportunities for groundbreaking scholarship and academic collaboration.</p>
                  <span className="text-primary font-bold text-sm">📅 November 1, 2025</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-12 border-b-2 border-primary/10 relative overflow-hidden flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex-1">
                      <h4 className="text-3xl font-bold text-gray-900 leading-tight">Upcoming Conference</h4>
                    </div>
                    <span className="inline-block px-5 py-2 bg-primary/20 text-primary font-bold rounded-full text-xs flex-shrink-0 whitespace-nowrap uppercase tracking-wider">Event</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium text-lg">Join us for our prestigious annual conference featuring world-renowned speakers, thought leaders, and distinguished scholars discussing contemporary theological and pastoral challenges affecting our communities.</p>
                  <span className="text-primary font-bold text-sm">📅 December 15, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;