import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const closeTimer = useRef(null);

  // helpers to avoid tiny hover gaps closing the desktop submenu
  const openMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const scheduleClose = (delay = 150) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, delay);
  };

  // Close the menu only when focus moves outside the wrapper (desktop)
  const handleBlur = (e) => {
    const related = e.relatedTarget;
    if (!related || !e.currentTarget.contains(related)) {
      scheduleClose(0);
    }
  };

  // Close mobile menu on navigation
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAcademicsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 z-50 shadow-md sticky top-0 backdrop-blur-sm bg-white/95">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-4 container">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
          <img src={logo} alt="Our Lady of the Angels Seminary logo" className="logo-img inline-block h-12 w-12 rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow" />
          <div className="flex flex-col">
            <span className="self-center text-sm font-bold whitespace-nowrap text-gray-900">Our Lady of the Angels</span>
            <span className="text-xs text-gray-500 font-medium">Seminary-College</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-1 py-1">
          <Link to="/" className="text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 px-3 py-2 rounded-md">Home</Link>
          <Link to="/about" className="text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 px-3 py-2 rounded-md">About</Link>

          {/* Academics dropdown (desktop) */}
          <div
            className="relative overflow-visible group"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            onFocus={openMenu}
            onBlur={handleBlur}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls="academics-menu"
              className="text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 flex items-center space-x-1 px-3 py-2 rounded-md"
            >
              <span>Academics</span>
              <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div
              id="academics-menu"
              role="menu"
              className={`absolute left-0 top-full w-60 bg-white border border-gray-100 rounded-xl shadow-2xl transition-all duration-200 z-50 overflow-hidden pointer-events-auto ${open ? 'opacity-100 visible scale-100 mt-2' : 'opacity-0 invisible scale-95 mt-0'}`}
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
            >
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-5 py-3 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">Academic Programs</p>
              </div>
              <Link to="/academics/basic-education" className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-50">Basic Education</Link>
              <Link to="/academics/college" className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-50">College</Link>
              <Link to="/academics/graduate-school" className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-50">Graduate School</Link>
              <Link to="/academics/ictc-pastoral" className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors">ICTC - Pastoral Department</Link>
            </div>
          </div>
          <Link to="/StudentJournal" className="text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 px-3 py-2 rounded-md">Student Journal</Link>
          <Link to="/graduate" className="text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 px-3 py-2 rounded-md">Graduate</Link>
          <Link to="/outreach" className="text-sm font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 px-3 py-2 rounded-md">Outreach</Link>        </div>

        {/* Right side: mobile hamburger */}
  <div className="flex items-center space-x-4">
          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-primary/10 hover:text-primary transition-all"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            {/* Icon: hamburger / X */}
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-6 space-y-1 divide-y divide-gray-100">
          <Link to="/" onClick={closeMobile} className="block text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 py-3 px-3 rounded-lg transition-all">Home</Link>
          <Link to="/about" onClick={closeMobile} className="block text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 py-3 px-3 rounded-lg transition-all">About</Link>

          {/* Academics (mobile collapsible) */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-between px-3 text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 py-3 rounded-lg transition-all"
              onClick={() => setMobileAcademicsOpen(v => !v)}
              aria-expanded={mobileAcademicsOpen}
            >
              <span>Academics</span>
              <svg className={`w-4 h-4 ml-2 text-gray-600 transform transition-transform ${mobileAcademicsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`mt-2 pl-8 pr-3 space-y-1 ${mobileAcademicsOpen ? 'block' : 'hidden'}`}>
              <Link to="/academics/basic-education" onClick={closeMobile} className="block text-gray-700 hover:text-primary hover:bg-primary/5 py-2 px-3 rounded transition-all">Basic Education</Link>
              <Link to="/academics/college" onClick={closeMobile} className="block text-gray-700 hover:text-primary hover:bg-primary/5 py-2 px-3 rounded transition-all">College</Link>
              <Link to="/academics/graduate-school" onClick={closeMobile} className="block text-gray-700 hover:text-primary hover:bg-primary/5 py-2 px-3 rounded transition-all">Graduate School</Link>
              <Link to="/academics/ictc-pastoral" onClick={closeMobile} className="block text-gray-700 hover:text-primary hover:bg-primary/5 py-2 px-3 rounded transition-all">ICTC - Pastoral Department</Link>
            </div>
          </div>

          <Link to="/graduate" onClick={closeMobile} className="block text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 py-3 px-3 rounded-lg transition-all">Graduate</Link>
          <Link to="/outreach" onClick={closeMobile} className="block text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 py-3 px-3 rounded-lg transition-all">Outreach</Link>
          <Link to="/StudentJournal" onClick={closeMobile} className="block text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 py-3 px-3 rounded-lg transition-all">Student Journal</Link>
          {/* support link removed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;