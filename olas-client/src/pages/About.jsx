import '../styles/About.css';

const About = () => {
  return (
    <div className="page-container about bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32" style={{
        backgroundImage: 'url(/images/about-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-blue-600/25"></div>
        <div className="absolute inset-0 bg-blue-500/15 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Our Story</span>
            <h1 className="text-6xl md:text-7xl font-black leading-tight drop-shadow-lg">About OLAS</h1>
            <p className="text-2xl md:text-3xl text-white/95 font-light drop-shadow">Empowering Latin American Scientists and Fostering Global Collaboration</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Journey</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">OLAS Brief History</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-l-4 border-primary transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <p className="text-lg leading-relaxed font-light text-gray-700 mb-6">
                  In the Academic Year 2010-2011, St. Francis School-Quezon City, through the assistance of St. Francis School-Sta. Ana, began to offer programs for Nursery and Kinder within the compound of the Our Lady of the Angels Seminary. The following Academic Year 2011-2012, St. Francis School-Quezon City started offering program for Grade I.
                </p>
                <p className="text-lg leading-relaxed font-light text-gray-700">
                  Then St. Francis School-Quezon City began offering Grades II, III, IV, V and VI for the succeeding Academic Years, establishing itself as a vital educational institution within the Seminary grounds.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-l-4 border-primary transition-all duration-300 hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Milestone Achievement
                </h3>
                <p className="text-lg leading-relaxed font-light text-gray-700 mb-4">
                  In Academic Year 2018-2019, the new school building, located at the back of Rieti (Rockville gate) was utilized for the first time, marking a significant expansion of our facilities.
                </p>
                <p className="text-lg leading-relaxed font-light text-gray-700">
                  In <span className="font-semibold text-gray-900">February 18, 2019</span>, Government recognition was granted to Kindergarten and Elementary courses, effective AY 2019-2020, validating our educational excellence and commitment to quality.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/8 to-primary/3 rounded-2xl p-12 border-2 border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed font-light text-gray-700">
                To <span className="font-semibold text-gray-900">empower every student to achieve personal and academic excellence</span>, become lifelong learners, and responsible, compassionate global citizens dedicated to serving their communities and contributing to a better world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;