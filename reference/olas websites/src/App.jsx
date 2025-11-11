import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Research from './pages/Research'
import Graduate from './pages/Graduate'
import Outreach from './pages/Outreach'
import Volunteer from './pages/Volunteer'

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/graduate" element={<Graduate />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
