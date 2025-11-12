import '../styles/Outreach.css';

const Outreach = () => {
  return (
    <div className="page-container outreach bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32" style={{
        backgroundImage: 'url(/images/outreach-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-blue-600/25"></div>
        <div className="absolute inset-0 bg-blue-500/15 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Community Impact</span>
            <h1 className="text-6xl md:text-7xl font-black leading-tight drop-shadow-lg">Community Outreach</h1>
            <p className="text-2xl md:text-3xl text-white/95 font-light drop-shadow">Connecting Science with Communities Across Latin America</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        {/* Current Initiatives Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Current Initiatives</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-10 flex-1 flex flex-col border-b-2 border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Science Education Program</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 font-medium">Bringing hands-on science education and practical learning experiences to schools in underserved communities across the region.</p>
                <div className="space-y-2">
                  <p className="text-primary font-semibold">📚 50+ Schools</p>
                  <p className="text-primary font-semibold">👥 1000+ Students</p>
                  <p className="text-primary font-semibold">🌍 10 Countries</p>
                </div>
              </div>
              <button className="mx-8 mb-8 mt-6 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all">Get Involved</button>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-10 flex-1 flex flex-col border-b-2 border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Workshops</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 font-medium">Empowering communities through scientific knowledge, practical skills training, and expert-led discussions on contemporary issues.</p>
                <div className="space-y-2">
                  <p className="text-primary font-semibold">📅 Monthly Events</p>
                  <p className="text-primary font-semibold">💯 Free Access</p>
                  <p className="text-primary font-semibold">👨‍🏫 Expert Speakers</p>
                </div>
              </div>
              <button className="mx-8 mb-8 mt-6 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all">Join Workshop</button>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-10 flex-1 flex flex-col border-b-2 border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Environmental Projects</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 font-medium">Working collaboratively with local communities on conservation, sustainability, and environmental stewardship initiatives.</p>
                <div className="space-y-2">
                  <p className="text-primary font-semibold">🌱 20+ Projects</p>
                  <p className="text-primary font-semibold">👥 Community-Led</p>
                  <p className="text-primary font-semibold">♻️ Sustainable Impact</p>
                </div>
              </div>
              <button className="mx-8 mb-8 mt-6 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all">View Projects</button>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Reach</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Our Impact</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center border border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-2">
              <div className="text-6xl font-bold text-primary mb-4">5000+</div>
              <p className="text-gray-700 font-semibold">Students Reached</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center border border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-2">
              <div className="text-6xl font-bold text-primary mb-4">100+</div>
              <p className="text-gray-700 font-semibold">Communities Served</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center border border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-2">
              <div className="text-6xl font-bold text-primary mb-4">30+</div>
              <p className="text-gray-700 font-semibold">Active Programs</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center border border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-2">
              <div className="text-6xl font-bold text-primary mb-4">15</div>
              <p className="text-gray-700 font-semibold">Partner Countries</p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Calendar</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Upcoming Events</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all border-t-4 border-primary hover:border-t-8">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 border-b-2 border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-lg px-4 py-2 text-center flex-shrink-0">
                    <p className="text-white font-bold text-sm">DEC</p>
                    <p className="text-white font-black text-2xl">15</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Science Fair 2025</h3>
                </div>
                <p className="text-gray-700 mb-4 font-medium">Annual showcase of student projects and research from across the region.</p>
                <p className="text-primary font-semibold">🌎 Virtual Event</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all border-t-4 border-primary hover:border-t-8">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 border-b-2 border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-lg px-4 py-2 text-center flex-shrink-0">
                    <p className="text-white font-bold text-sm">JAN</p>
                    <p className="text-white font-black text-2xl">20</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Community Workshop</h3>
                </div>
                <p className="text-gray-700 mb-4 font-medium">Sustainable agriculture practices and techniques for local communities.</p>
                <p className="text-primary font-semibold">📍 Multiple Locations</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all border-t-4 border-primary hover:border-t-8">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 border-b-2 border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-lg px-4 py-2 text-center flex-shrink-0">
                    <p className="text-white font-bold text-sm">FEB</p>
                    <p className="text-white font-black text-2xl">05</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Environmental Summit</h3>
                </div>
                <p className="text-gray-700 mb-4 font-medium">Discussing climate change impacts, solutions, and regional action plans.</p>
                <p className="text-primary font-semibold">📍 São Paulo, Brazil</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Join Us</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Get Involved</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-t-4 border-primary hover:border-t-8 transition-all hover:-translate-y-2 text-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg className="w-12 h-12 text-primary mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 6a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6z"></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
                <p className="text-gray-700 mb-6 font-medium">Join our dedicated team of volunteers making a real difference in communities.</p>
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all w-full">Sign Up Now</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-t-4 border-primary hover:border-t-8 transition-all hover:-translate-y-2 text-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg className="w-12 h-12 text-primary mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner With Us</h3>
                <p className="text-gray-700 mb-6 font-medium">Collaborate on community outreach initiatives and expand our collective impact.</p>
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all w-full">Contact Us</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-t-4 border-primary hover:border-t-8 transition-all hover:-translate-y-2 text-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg className="w-12 h-12 text-primary mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Our Work</h3>
                <p className="text-gray-700 mb-6 font-medium">Contribute financially to advance science education and community outreach.</p>
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all w-full">Donate</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Outreach;