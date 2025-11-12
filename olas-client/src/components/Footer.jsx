import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-t-2 border-primary/20 backdrop-filter backdrop-blur-lg">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="footer-section group">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-4">OLAS</h3>
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-4 font-medium">Our Lady of the Angels<br />Seminary-College</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="block mb-2">Seminary Road, Bagbag</span>
              <span>Novaliches, Quezon City</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="text-xl font-bold text-white mb-6 pb-3 border-b-2 border-primary/30">Quick Links</h4>
            <ul className="space-y-4">
              <li className="group/link">
                <Link to="/about" className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:scale-150 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li className="group/link">
                <Link to="/StudentJournal" className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:scale-150 transition-transform"></span>
                  Student Journal
                </Link>
              </li>
              <li className="group/link">
                <Link to="/graduate" className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:scale-150 transition-transform"></span>
                  Graduate Programs
                </Link>
              </li>
              <li className="group/link">
                <Link to="/volunteer" className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:scale-150 transition-transform"></span>
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div className="footer-section">
            <h4 className="text-xl font-bold text-white mb-6 pb-3 border-b-2 border-primary/30">Academics</h4>
            <ul className="space-y-4">
              <li className="group/link">
                <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:scale-150 transition-transform"></span>
                  Basic Education
                </a>
              </li>
              <li className="group/link">
                <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:scale-150 transition-transform"></span>
                  College
                </a>
              </li>
              <li className="group/link">
                <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:scale-150 transition-transform"></span>
                  Graduate School
                </a>
              </li>
              <li className="group/link">
                <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:scale-150 transition-transform"></span>
                  ICTC Pastoral
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="text-xl font-bold text-white mb-6 pb-3 border-b-2 border-primary/30">Contact</h4>
            <ul className="space-y-5">
              <li className="group/contact">
                <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">Email</p>
                <a href="mailto:info@olas.org" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium text-sm group-hover/contact:translate-x-1 inline-block">
                  info@olas.org
                </a>
              </li>
              <li className="group/contact">
                <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">Phone</p>
                <a href="tel:+63-2-123-4567" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium text-sm group-hover/contact:translate-x-1 inline-block">
                  (+63) 2 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-12"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Our Lady of the Angels Seminary-College. <br className="md:hidden" />All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href="#" className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary hover:to-primary/80 text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 border border-white/10 hover:border-primary/50 overflow-hidden" title="Facebook">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary hover:to-primary/80 text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 border border-white/10 hover:border-primary/50 overflow-hidden" title="Instagram">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 9.797c.006.195.01.39.01.586 0 6.017-4.579 12.968-12.959 12.968-2.577 0-4.974-.756-6.989-2.065.357.042.722.064 1.093.064 2.139 0 4.105-.648 5.789-1.775-2.001-.037-3.687-1.355-4.266-3.169.281.042.567.064.859.064.417 0 .819-.054 1.204-.155-2.094-.42-3.666-2.265-3.666-4.478v-.057c.619.365 1.335.591 2.099.617-1.23-.82-2.04-2.218-2.04-3.803 0-.836.225-1.62.619-2.295 2.26 2.77 5.637 4.593 9.45 4.791-.08-.34-.121-.691-.121-1.052 0-2.55 2.06-4.61 4.61-4.61 1.325 0 2.52.558 3.361 1.452 1.047-.207 2.03-.591 2.914-1.123-.343 1.09-1.077 2.005-2.029 2.585.929-.111 1.815-.358 2.639-.723-.616.923-1.395 1.73-2.29 2.381z"/></svg>
            </a>
            <a href="#" className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary hover:to-primary/80 text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 border border-white/10 hover:border-primary/50 overflow-hidden" title="LinkedIn">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="#" className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary hover:to-primary/80 text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 border border-white/10 hover:border-primary/50 overflow-hidden" title="Twitter">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-9.835c-1.885.604-3.872 1.948-5.484 3.652-.165.272-.273.618-.32 1.015.5-.196.999-.388 1.474-.577-1.244.711-2.586 1.322-3.995 1.77-.78-.457-1.592-.896-2.424-1.3-.78-.403-1.607-.743-2.456-1.023-.851-.281-1.729-.5-2.625-.653-.896-.154-1.776-.142-2.632.1-.86.244-1.666.716-2.294 1.376-.628.66-.998 1.451-1.07 2.27-.072.82.143 1.622.568 2.286-.393-.055-.769-.187-1.099-.421.143-.427.394-.844.74-1.2.346-.356.84-.603 1.35-.693-1.128.227-2.119.882-2.761 1.826-.642.944-.937 2.07-.82 3.182.117 1.113.548 2.136 1.228 2.95-.475-.246-.902-.606-1.248-1.048-.346-.442-.604-.951-.755-1.489-.152-.538-.162-1.099-.032-1.627.13-.528.384-1.022.74-1.433.357-.411.82-.71 1.342-.87-.47.095-.9.344-1.25.729-.35.385-.585.866-.667 1.376-.082.51.046 1.027.368 1.443.322.416.8.685 1.314.777-.473.28-.84.737-1.066 1.268-.227.532-.28 1.11-.153 1.662.128.553.42 1.049.86 1.415.44.367 1.002.578 1.58.597-.474.517-.742 1.195-.765 1.9z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;