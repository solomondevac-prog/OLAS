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
    <nav className="bg-white border-b border-gray-200 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 container">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Our Lady of the Angels Seminary logo" className="logo-img inline-block h-10 w-10 rounded-md object-cover" />
          <span className="self-center text-l font-semibold whitespace-nowrap text-dark">Our Lady of the Angels Seminary</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary">About</Link>

          {/* Academics dropdown (desktop) */}
          <div
            className="relative overflow-visible"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            onFocus={openMenu}
            onBlur={handleBlur}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls="academics-menu"
              className="text-sm font-medium text-gray-700 hover:text-primary flex items-center space-x-2"
            >
              <span>Academics</span>
              <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div
              id="academics-menu"
              role="menu"
              className={`absolute left-0 top-full mt-0 w-52 bg-white border border-gray-200 rounded-md shadow-lg transition-opacity z-50 ${open ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
            >
              <Link to="/academics/basic-education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Basic Education</Link>
              <Link to="/academics/college" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">College</Link>
              <Link to="/academics/graduate-school" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Graduate School</Link>
              <Link to="/academics/ictc-pastoral" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ICTC - Pastoral Department</Link>
            </div>
          </div>

          <Link to="/graduate" className="text-sm font-medium text-gray-700 hover:text-primary">Graduate</Link>
          <Link to="/outreach" className="text-sm font-medium text-gray-700 hover:text-primary">Outreach</Link>
          <Link to="/research" className="text-sm font-medium text-gray-700 hover:text-primary">Research</Link>
          <Link to="/volunteer" className="text-sm font-medium text-gray-700 hover:text-primary">Volunteer</Link>
        </div>

        {/* Right side: support button + mobile hamburger */}
        <div className="flex items-center space-x-3">
          <Link to="/donate" className="px-4 py-2 rounded-full bg-primary text-white shadow hover:bg-primary-dark text-sm">Support</Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
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
      <div className={`md:hidden bg-white border-b border-gray-200 transition-max-h duration-200 overflow-hidden ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          <Link to="/" onClick={closeMobile} className="block text-base font-medium text-gray-700 hover:text-primary">Home</Link>
          <Link to="/about" onClick={closeMobile} className="block text-base font-medium text-gray-700 hover:text-primary">About</Link>

          {/* Academics (mobile collapsible) */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-between px-0 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileAcademicsOpen(v => !v)}
              aria-expanded={mobileAcademicsOpen}
            >
              <span>Academics</span>
              <svg className={`w-4 h-4 ml-2 text-gray-600 transform transition-transform ${mobileAcademicsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`mt-2 pl-4 space-y-1 ${mobileAcademicsOpen ? 'block' : 'hidden'}`}>
              <Link to="/academics/basic-education" onClick={closeMobile} className="block text-gray-700 hover:text-primary">Basic Education</Link>
              <Link to="/academics/college" onClick={closeMobile} className="block text-gray-700 hover:text-primary">College</Link>
              <Link to="/academics/graduate-school" onClick={closeMobile} className="block text-gray-700 hover:text-primary">Graduate School</Link>
              <Link to="/academics/ictc-pastoral" onClick={closeMobile} className="block text-gray-700 hover:text-primary">ICTC - Pastoral Department</Link>
            </div>
          </div>

          <Link to="/graduate" onClick={closeMobile} className="block text-base font-medium text-gray-700 hover:text-primary">Graduate</Link>
          <Link to="/outreach" onClick={closeMobile} className="block text-base font-medium text-gray-700 hover:text-primary">Outreach</Link>
          <Link to="/research" onClick={closeMobile} className="block text-base font-medium text-gray-700 hover:text-primary">Research</Link>
          <Link to="/volunteer" onClick={closeMobile} className="block text-base font-medium text-gray-700 hover:text-primary">Volunteer</Link>

          <div className="pt-3">
            <Link to="/donate" onClick={closeMobile} className="block px-4 py-2 rounded-full bg-primary text-white shadow hover:bg-primary-dark text-sm text-center">Support</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;