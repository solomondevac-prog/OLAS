import '../styles/Graduate.css';

const Graduate = () => {
  return (
    <div className="page-container graduate bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32" style={{
        backgroundImage: 'url(/images/graduate-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-blue-600/25"></div>
        <div className="absolute inset-0 bg-blue-500/15 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Advanced Learning</span>
            <h1 className="text-6xl md:text-7xl font-black leading-tight drop-shadow-lg">Graduate Programs</h1>
            <p className="text-2xl md:text-3xl text-white/95 font-light drop-shadow">Supporting Latin American Scientists in Their Academic Journey</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        {/* Programs Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Offerings</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Graduate Programs</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full mb-8"></div>
            <p className="text-gray-600 text-xl max-w-4xl leading-relaxed">
              Our Graduate School offers a diverse range of master's and doctoral programs designed to prepare leaders, innovators, and scholars ready to tackle global challenges.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border border-primary/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <p className="text-lg leading-relaxed font-light text-gray-700">
                Each program combines rigorous academic coursework, cutting-edge research opportunities, and practical experience. Our faculty members are accomplished scholars and practitioners dedicated to mentoring the next generation of leaders. We welcome applications from qualified candidates worldwide, with special consideration for Latin American students.
              </p>
            </div>
          </div>
        </section>

        {/* Application Requirements Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Getting Started</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Application Requirements & Deadlines</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-t-4 border-primary hover:border-t-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Requirements
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Bachelor's Degree</p>
                      <p className="text-gray-600 text-sm">From an accredited institution</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Statement of Purpose</p>
                      <p className="text-gray-600 text-sm">Outlining your academic goals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Letters of Recommendation</p>
                      <p className="text-gray-600 text-sm">From academic or professional references</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Transcripts</p>
                      <p className="text-gray-600 text-sm">Official records of academic achievement</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-t-4 border-primary hover:border-t-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Application Process
                </h3>
                <p className="text-lg leading-relaxed font-light text-gray-700 mb-6">
                  The Graduate School accepts applications on a <span className="font-semibold text-gray-900">rolling basis</span> throughout the year. Early submission is encouraged to ensure full consideration of your application.
                </p>
                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-6 border border-primary/20">
                  <p className="text-gray-600">
                    <span className="font-semibold text-primary">Next Intake:</span> Applications are being accepted for the upcoming academic year. Contact the admissions office for current deadlines and specific program timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-16 border border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">Ready to Apply?</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Take the next step in your academic journey. Submit your application today and join our community of scholars and innovators.
            </p>
            <a 
              href="mailto:admissions@olas.org"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 shadow-lg hover:scale-105 transform"
            >
              <span>Submit Application</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Graduate;