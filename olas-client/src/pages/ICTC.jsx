import React, { useState } from 'react';
import '../styles/Graduate.css';
import logo from '../assets/images/ictc.png';
import hymPDF from '../assets/docs/TATAK_PASTORAL_(ICTChymn)_BabianoandFrPine_2021.pdf';

const ICTC = () => {
  return (
    <div className="page-container min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
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
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Logo */}
            <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
              <img 
                src={logo} 
                alt="ICTC - Pastoral Department logo" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl bg-white/10 rounded-2xl p-4"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-block md:inline-block md:mr-0">
                <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Theological Institution</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight drop-shadow-lg">
                ICTC
              </h1>
              <p className="text-2xl md:text-3xl text-white/95 font-light drop-shadow">
                Inter-Congregational Theological Center
              </p>
              <p className="text-lg text-white/85 leading-relaxed drop-shadow">
                A theological institution that forms pastoral agents immersed in God's Word and responsive to social realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        
        {/* About Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Core Values</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">What We Stand For</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Formation</h3>
              <p className="text-gray-700 leading-relaxed font-medium relative z-10">
                Comprehensive spiritual and theological formation programs designed to develop well-rounded pastoral leaders rooted in faith and community.
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001c0 5.591 3.824 10.29 9 11.622m0-13c5.5 0 10 4.745 10 10.999c0 5.591-3.824 10.29-9 11.622"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Academic Excellence</h3>
              <p className="text-gray-700 leading-relaxed font-medium relative z-10">
                Rigorous academic programs rooted in faith and contemporary theological scholarship for holistic pastoral development.
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary hover:border-t-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 6a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Community Service</h3>
              <p className="text-gray-700 leading-relaxed font-medium relative z-10">
                Commitment to serving communities and promoting social justice through authentic pastoral action and solidarity.
              </p>
            </div>
          </div>
        </section>

        {/* About ICTC Section */}
        <section className="mb-24">
          <div className="mb-20">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Story & Mission</p>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">About ICTC</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-l-4 border-primary transition-all hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed font-light mb-6">
                  The Inter-Congregational Theological Center (ICTC) is a theological institution that aims to form, educate, and train consecrated persons, diocesan seminarians, and lay who are interested to uphold the institution's pastorally-oriented theological vision. ICTC is committed to form, educate, and train persons who will be <span className="font-semibold text-gray-900">resolute pastoral agents</span>, and who, while aspiring to follow and ready to be configured to Christ the Good Shepherd, are deeply rooted in the Filipino culture and values.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  We envision pastoral agents who are <span className="font-semibold text-gray-900">catalysts for social transformation</span>, mission-oriented, ecumenical, open to interreligious dialogue and respectful of multi-culturality in the context of Asia, and responsive to the challenge of creating a universal culture of social love.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-l-4 border-primary transition-all hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Our Origins & Vision
                </h3>
                <p className="text-lg leading-relaxed font-light mb-4">
                  From the very beginning, ICTC was conceived not as an institution but as a <span className="font-semibold text-gray-900">means to achieve a dream</span> for the Church and society seeking transformation inspired by the message of the Reign of Jesus of Nazareth. In 1986, a number of major superiors attending the annual meeting of the Association of Major Religious Superiors in the Philippines (AMRSP) informally exchanged views and toyed with the idea of putting up an alternative theological school that would cater and respond to the particular needs and orientation of their congregations.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  The vision was to stress <span className="font-semibold text-gray-900">contextualized theology</span> rooted in the life and struggle of our people, discovering the particular charism of each congregation in the service of this theology. While the theological formation would primarily serve religious, it would also be geared towards preparing those who wished to be accepted in the Major Orders.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-10 border-l-4 border-primary transition-all hover:-translate-y-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Our Foundation & Growth
                </h3>
                <p className="text-lg leading-relaxed font-light mb-4">
                  With a philosophy and program of theological studies formulated by religious and lay members in January 1988, ICTC was formally established. The Major Superiors who joined ICTC in 1988 were the Redemptorists (CSsR) and the Order of Carmelites (O.Carm.), followed by the Order of Friars Minor (OFM).
                </p>
                <p className="text-lg leading-relaxed font-light">
                  ICTC operates through <span className="font-semibold text-gray-900">three interrelated programs: academic, pastoral, and spirituality</span>. Throughout the years, ICTC has been in close partnership with the Our Lady of the Angels Seminary regarding its academic program and formation, while running its pastoral and spirituality programs. Part of its pastoral program is to offer basic theological and pastoral formation and training designed for lay people.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/8 to-primary/3 rounded-2xl p-10 border-2 border-primary/30 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                SANLAKBAY 2025
              </h3>
              <p className="text-lg leading-relaxed font-light">
                In 2025, ICTC aspires to <span className="font-semibold text-gray-900">intensify its formation program designed for lay people</span>. Hence, SANLAKBAY (Oscar Ante Lay Pastoral Formation) will be launched on <span className="font-bold text-primary">November 12, 2025</span> to also commemorate Oscar A. Ante, OFM, who had been a <span className="font-semibold text-gray-900">staunch advocate for the empowerment of lay people</span> and who was a dedicated Director of ICTC. This marks a significant commitment to pastoral transformation and lay empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-24">
          <div className="mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Comprehensive Programs</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Formation Programs</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-primary hover:border-t-8 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-primary/8 to-primary/3 p-10 border-b border-primary/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001c0 5.591 3.824 10.29 9 11.622m0-13c5.5 0 10 4.745 10 10.999c0 5.591-3.824 10.29-9 11.622"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Pastoral Formation Program</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  A comprehensive program that integrates spiritual development, theological education, and practical pastoral skills for ministerial excellence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-base">Spiritual Direction & Guidance</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-base">Advanced Theological Studies</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-base">Pastoral Ministry Skills Training</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-base">Community Engagement & Service</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-primary hover:border-t-8 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-primary/8 to-primary/3 p-10 border-b border-primary/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 6a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Lay Pastoral Formation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  Empowering lay members with pastoral skills and theological knowledge to serve their communities effectively and authentically.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-base">Theological Foundations</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-base">Pastoral Care & Counseling</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-base">Sacramental Preparation</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-base">Leadership Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ICTC Hymn Section */}
        <section className="mb-24">
          <div className="mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Official Hymn</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Tatak Pastoral - ICTC Hymn</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full mb-8"></div>
            <p className="text-gray-600 text-xl max-w-3xl">
              "Tatak Pastoral" (The Mark of the Pastoral) is the official hymn of the ICTC, embodying the spirit, mission, and pastoral charism of our formation community. This hymn reflects our commitment to serve with dedication, compassion, and authentic witness to the Gospel.
            </p>
          </div>
          
          {/* PDF Display */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow">
              <iframe 
                src={`${hymPDF}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full"
                style={{ height: '3300px', minHeight: '600px' }}
                title="ICTC Hymn - Tatak Pastoral"
              />
            </div>
            
            {/* Download Link */}
            <div className="mt-10 text-center">
              <a 
                href={hymPDF}
                download="TATAK_PASTORAL_ICTC_Hymn.pdf"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105 transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span>Download ICTC Hymn (PDF)</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ICTC;
