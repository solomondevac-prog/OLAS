import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 container">
        <Link to="/" className="flex items-center space-x-3">
          {/* Logo image: place the provided file at `public/logo.png` so this resolves at runtime */}
          <img src={logo} alt="Our Lady of the Angels Seminary logo" className="logo-img inline-block h-10 w-10 rounded-md object-cover" />
          <span className="self-center text-l font-semibold whitespace-nowrap text-dark">Our Lady of the Angels Seminary</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary">About</Link>
          <Link to="/graduate" className="text-sm font-medium text-gray-700 hover:text-primary">Graduate</Link>
          <Link to="/outreach" className="text-sm font-medium text-gray-700 hover:text-primary">Outreach</Link>
          <Link to="/research" className="text-sm font-medium text-gray-700 hover:text-primary">Research</Link>
          <Link to="/volunteer" className="text-sm font-medium text-gray-700 hover:text-primary">Volunteer</Link>
        </div>

        <div className="flex items-center space-x-3">
          <Link to="/donate" className="px-4 py-2 rounded-full bg-primary text-white shadow hover:bg-primary-dark text-sm">Support</Link>
          {/* Mobile menu placeholder (keeps minimal footprint). Add a dropdown/toggle here later if desired. */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;