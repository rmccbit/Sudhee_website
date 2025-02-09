import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-navbar shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <Calculator className="h-8 w-8 text-indigo-400" /> */}
            <img src="/rmclogo.jpg" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-white">Ramanujan Maths Club</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors">About</a>
            <a href="#events" className="text-gray-300 hover:text-indigo-400 transition-colors">Events</a>
            <a href="#team" className="text-gray-300 hover:text-indigo-400 transition-colors">Team</a>
            <a href="#faq" className="text-gray-300 hover:text-indigo-400 transition-colors">FAQ</a>
            <a 
              href="https://linktr.ee/ramanujan.maths.club?fbclid=PAY2xjawIF-DBleHRuA2FlbQIxMQABpuRysQe9yU5VJH8UGY16uIxK9p0G_oOqvH0lJ2xAgxY1gg531L0dcCI4qA_aem_TSIlpF4HrrNfRfzbjvz5yQ" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                Register Now
              </button>
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;