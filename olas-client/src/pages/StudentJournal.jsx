import React from 'react';
import '../styles/StudentJournal.css';
import sanlakbayPDF from '../assets/docs/SANLAKBAY (OSCAR ANTE LAY PASTORAL FORMATION).pdf.pdf';

const StudentJournal = () => {
  return (
    <div className="page-container min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32" style={{
        backgroundImage: 'url(/images/research-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-blue-600/25"></div>
        <div className="absolute inset-0 bg-blue-500/15 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Formation Program</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-4 leading-tight drop-shadow-lg">
              SANLAKBAY
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 font-light drop-shadow">
              Oscar Ante Lay Pastoral Formation
            </p>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Empowering lay people for pastoral ministry and spiritual transformation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        
        {/* Introduction Section */}
        <section className="mb-24">
          <div className="mb-20">
            <div className="space-y-2 mb-8">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm">About This Program</p>
              <h2 className="text-6xl font-bold text-gray-900 leading-tight">About SANLAKBAY</h2>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-gray-700">
              <p className="text-lg leading-relaxed font-light">
                The Inter-Congregational Theological Center (ICTC) is a theological institution that aims to form, educate, and train consecrated persons, diocesan seminarians, and lay who are interested to uphold the institution's pastorally-oriented theological vision. ICTC is committed to form, educate, and train persons who will be resolute pastoral agents, and who, while aspiring to follow and ready to be configured to Christ the Good Shepherd, are deeply rooted in the Filipino culture and values, catalysts for social transformation, mission-oriented, ecumenical, open to interreligious dialogue and respectful of multi-culturality in the context of Asia and responsive to the challenge of creating a universal culture of social love.
              </p>

              <p className="text-lg leading-relaxed font-light">
                From the very beginning, ICTC was conceived not as an institution but as means to achieve a dream for the Church and society seeking transformation inspired by the message of the Reign of Jesus of Nazareth. In 1986 a number of major superiors attending the annual meeting of the Association of Major Religious Superiors in the Philippines (AMRSP) informally exchanged views among themselves and toyed with the idea of putting up an alternative theological school/formation that would cater and respond to the particular needs and orientation of their congregations. The school would stress contextualized theology rooted in the life and struggle of our people, and discovering the particular charism of each congregations in the service of this theology.
              </p>

              <p className="text-lg leading-relaxed font-light">
                With the philosophy and a program of theological studies formulated by a group of religious and lay in January 1988, ICTC was formally established. The Major Superiors who joined ICTC in 1988 were the Redemptorists (CSsR) and the Order of Carmelites (O.Carm.), followed by the Order of Friars Minor (OFM).
              </p>

              <p className="text-lg leading-relaxed font-light">
                ICTC has three interrelated programs: academic, pastoral and spirituality. Throughout the years, ICTC have been in close partnership with the Our Lady of the Angels Seminary with regard to its academic program and formation while it runs its pastoral and spirituality programs. Part of its pastoral program is to offer basic theological and pastoral formation and training designed for lay people—this is the SANLAKBAY program.
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Year of Launch</h3>
              <p className="text-gray-700 leading-relaxed font-medium relative z-10">
                SANLAKBAY was officially launched on <span className="font-bold text-primary">November 12, 2025</span> to commemorate Oscar A. Ante, OFM, and his legacy.
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Dedicated Legacy</h3>
              <p className="text-gray-700 leading-relaxed font-medium relative z-10">
                Named after a staunch advocate for lay empowerment and the dedicated Director of ICTC who inspired transformation.
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Formation Mission</h3>
              <p className="text-gray-700 leading-relaxed font-medium relative z-10">
                Intensifying comprehensive formation programs designed to empower lay people for pastoral ministry and service.
              </p>
            </div>
          </div>
        </section>

        {/* ΠΡΌΘΕΣΙΣ Student Journal Section */}
        <section className="mb-24">
          <div className="mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Student Publication</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-3">ΠΡÓΘΕΣΙΣ</h2>
            <p className="text-2xl text-primary font-light italic mb-6">Philosophy, Theology, & Pastoral Ministry in a Single Heartbeat</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Overview Section */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/2 rounded-2xl p-10 border border-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About the Journal</h3>
              <p className="text-lg leading-relaxed font-light mb-6">
                <span className="font-semibold text-gray-900">ΠΡÓΘΕΣΙΣ</span> is the Student Journal of the Our Lady of the Angels Seminary-College (OLAS-College), OLAS-College Graduate School, and the Inter-Congregational Theological Center.
              </p>
              
              <div className="bg-white rounded-xl p-6 mb-6 border-l-4 border-primary">
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  The Greek word <span className="font-semibold italic text-primary">πρόθεσις (prothesis)</span>, which means <span className="font-bold">"purpose,"</span> is found in Romans 8:28. This verse states: <span className="italic">"We know that all things work together for good for those who love God, who are called according to his purpose."</span>
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  In the context of the verse, the word tells of God's overarching intention for everything in the created order, highlighting the ultimate meaning of our life and existence. Thus, the word is philosophical, theological, and pastoral. It captures the kind of student journal we intend to publish.
                </p>
              </div>

              <p className="text-lg leading-relaxed font-light">
                ΠΡÓΘΕΣΙΣ will contain <span className="font-semibold text-gray-900">selected journal articles—philosophical, theological, and pastoral</span>—from the college students of the Our Lady of the Angels Seminary-College, OLAS-College Graduate School, and Inter-Congregational Theological Center. This Student Journal aims to have a <span className="font-semibold text-gray-900">semestral publication</span>.
              </p>
            </div>

            {/* Editorial Team Section */}
            <div className="bg-gradient-to-br from-primary/8 to-primary/3 rounded-2xl p-10 border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Editorial Team</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Editor-in-Chief</h4>
                  <p className="text-gray-600 font-semibold">Ronel dela Cruz, PhD</p>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Associate Editor</h4>
                  <p className="text-gray-600 font-semibold">Br. Marc Jozsef Lester Halig, O. Carm, MATh</p>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Subject Editors</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">Sacred Scripture</p>
                    <p className="text-gray-700 font-semibold mt-2">Fr. Crisitino Robles Pine, OFM, SSL, STD</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">Systematic Theology</p>
                    <p className="text-gray-700 font-semibold mt-2">Fr. Neil Badillo, OFM, SThD</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">Missiology</p>
                    <p className="text-gray-700 font-semibold mt-2">Fr. Roberto Rosas, O.Carm, STL</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">Pastoral Ministry</p>
                    <p className="text-gray-700 font-semibold mt-2">Fr. Roberto Manansala, OFM, DMin</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">Philosophy</p>
                    <p className="text-gray-700 font-semibold mt-2">Fr. Kenneth Masong, PhD</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Editorial Board</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Most Reverend Dave Capucao, DD</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Fr. Rico P. Ponce, O.Carm., SThD, PhD</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Fr. Lino Gregorio Redoblado, OFM, PhD</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Fr. Cielito Alamzan, OFM, SSL</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Fr. Esmeraldo Reforeal, O. Carm.</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Fr. Victorino Cueto, CSsR, SThD, PhD</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Sr. Marie Teresita Bravo, SFIC, PhD</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Sr. Joy Jumawan, Carm.O.L., PhD</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Lysander Rivera, PhD</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Fr. Roberto Luanzon, Jr., OP, SThD, DL</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Fr. Loui Coronel, OP, EHL</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Sheila Marie Hocson, PhD</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                    <span className="font-semibold">Natividad Pagadut, PhD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Section */}
        <section className="mb-24">
          <div className="mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Official Documentation</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Program Document</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full mb-8"></div>
            <p className="text-gray-600 text-xl max-w-3xl">
              Download and review the complete SANLAKBAY - Oscar Ante Lay Pastoral Formation program documentation to learn more about our comprehensive formation approach.
            </p>
          </div>
          
          {/* PDF Display */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow">
              <iframe 
                src={`${sanlakbayPDF}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full"
                style={{ height: '1550px', minHeight: '600px' }}
                title="SANLAKBAY - Oscar Ante Lay Pastoral Formation"
              />
            </div>
            
            {/* Download Link */}
            <div className="mt-10 text-center">
              <a 
                href={sanlakbayPDF}
                download="SANLAKBAY_Oscar_Ante_Lay_Pastoral_Formation.pdf"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105 transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span>Download Complete Program (PDF)</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StudentJournal;