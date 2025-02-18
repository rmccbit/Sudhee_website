import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Query from './components/Query';
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Events />
              <Gallery />
              <Team />
              <FAQ />
            </>
          } />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <Query />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;