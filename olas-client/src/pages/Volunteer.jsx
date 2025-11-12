import '../styles/Volunteer.css';

const Volunteer = () => {
  return (
    <div className="page-container volunteer bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32" style={{
        backgroundImage: 'url(/images/volunteer-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-blue-600/25"></div>
        <div className="absolute inset-0 bg-blue-500/15 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Make an Impact</span>
            <h1 className="text-6xl md:text-7xl font-black leading-tight drop-shadow-lg">Volunteer With OLAS</h1>
            <p className="text-2xl md:text-3xl text-white/95 font-light drop-shadow">Make a Difference in Latin American Science and Education</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        {/* Opportunities Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Join Our Team</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Volunteer Opportunities</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-10 flex-1 flex flex-col border-b-2 border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Science Education</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 font-medium">Share your knowledge with students and aspiring scientists through teaching and mentoring programs.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    Background in science or education
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    4-6 hours per week
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    Remote or in-person options
                  </li>
                </ul>
              </div>
              <button className="mx-8 mb-8 mt-6 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all">Apply Now</button>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-10 flex-1 flex flex-col border-b-2 border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Mentorship</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 font-medium">Guide and support emerging researchers in their academic projects and scholarly development.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    Advanced degree required
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    2-3 hours per week
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    Virtual mentoring
                  </li>
                </ul>
              </div>
              <button className="mx-8 mb-8 mt-6 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all">Apply Now</button>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-10 flex-1 flex flex-col border-b-2 border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Outreach</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 font-medium">Help organize and run science events and initiatives in local communities across the region.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    No specific background required
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    Flexible schedule
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">•</span>
                    Local presence needed
                  </li>
                </ul>
              </div>
              <button className="mx-8 mb-8 mt-6 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all">Apply Now</button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Why Volunteer</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Benefits of Volunteering</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-t-4 border-primary hover:border-t-8 transition-all hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Professional Growth
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Network with scientists and scholars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Gain valuable teaching experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Develop leadership skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Receive dedicated mentorship</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-t-4 border-primary hover:border-t-8 transition-all hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                  Personal Development
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Make a meaningful impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Experience cultural exchange</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Improve language skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Build community connections</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-t-4 border-primary hover:border-t-8 transition-all hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Recognition
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Receive volunteer certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Obtain reference letters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Earn performance rewards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">Get featured in stories</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Steps Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Getting Started</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Ready to Join Us?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full mb-8"></div>
            <p className="text-gray-600 text-xl max-w-4xl leading-relaxed">Take the first step towards making a meaningful difference in Latin American science and education through volunteer service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Role</h3>
              <p className="text-gray-700 font-medium">Select from our various volunteer opportunities that match your interests and expertise.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apply Online</h3>
              <p className="text-gray-700 font-medium">Fill out our simple and straightforward application form with your background information.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Training</h3>
              <p className="text-gray-700 font-medium">Complete our comprehensive volunteer orientation and training program.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
                <span className="text-3xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Volunteering</h3>
              <p className="text-gray-700 font-medium">Begin your impactful journey with OLAS and make a difference.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 shadow-lg hover:scale-105 transform">
              <span>Start Application</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Volunteer;