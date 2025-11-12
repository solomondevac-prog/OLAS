import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import StudentJournal from './pages/StudentJournal';
import Graduate from './pages/Graduate';
import Outreach from './pages/Outreach';
import Volunteer from './pages/Volunteer';
import ICTC from './pages/ICTC';
import { useEffect } from 'react';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={
            <main className="main-content">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/StudentJournal" element={<StudentJournal />} />
                <Route path="/graduate" element={<Graduate />} />
                <Route path="/outreach" element={<Outreach />} />
                <Route path="/academics/ictc-pastoral" element={<ICTC />} />
                <Route path="/volunteer" element={<Volunteer />} />
              </Routes>
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App