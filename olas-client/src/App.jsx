import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Graduate from './pages/Graduate';
import Outreach from './pages/Outreach';
import Volunteer from './pages/Volunteer';
import ICTC from './pages/ICTC';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/graduate" element={<Graduate />} />
            <Route path="/outreach" element={<Outreach />} />
            <Route path="/academics/ictc-pastoral" element={<ICTC />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
