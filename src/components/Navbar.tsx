// import React, { useState, useEffect } from 'react';
// import { Calculator } from 'lucide-react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-gray-900/80 backdrop-blur-navbar shadow-lg' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             {/* <Calculator className="h-8 w-8 text-indigo-400" /> */}
//             <img src="/rmclogo.jpg" alt="Logo" className="h-8 w-8" />
//             <span className="ml-2 text-xl font-bold text-white">Ramanujan Maths Club</span>
//           </div>
//           <div className="flex items-center space-x-8">
//             <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors">About</a>
//             <a href="#events" className="text-gray-300 hover:text-indigo-400 transition-colors">Events</a>
//             <a href="#team" className="text-gray-300 hover:text-indigo-400 transition-colors">Team</a>
//             <a href="#faq" className="text-gray-300 hover:text-indigo-400 transition-colors">FAQ</a>
//             <a 
//               href="https://linktr.ee/ramanujan.maths.club?fbclid=PAY2xjawIF-DBleHRuA2FlbQIxMQABpuRysQe9yU5VJH8UGY16uIxK9p0G_oOqvH0lJ2xAgxY1gg531L0dcCI4qA_aem_TSIlpF4HrrNfRfzbjvz5yQ" 
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
//                 Register Now
//               </button>
//             </a>

//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/rmclogo.jpg" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-white">Ramanujan Maths Club</span>
          </div>

          {/* Desktop Navigation - Always Visible */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors">About</a>
            <a href="#events" className="text-gray-300 hover:text-indigo-400 transition-colors">Events</a>
            <a href="#team" className="text-gray-300 hover:text-indigo-400 transition-colors">Team</a>
            <a href="#faq" className="text-gray-300 hover:text-indigo-400 transition-colors">FAQ</a>
            <a 
              href="https://linktr.ee/ramanujan.maths.club" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                Register Now
              </button>
            </a>
          </div>

          {/* Mobile Menu Button - Visible Only on Small Screens */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Visible Only When Toggled */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4 px-6">
          <a href="#about" className="block text-gray-300 py-2 hover:text-indigo-400">About</a>
          <a href="#events" className="block text-gray-300 py-2 hover:text-indigo-400">Events</a>
          <a href="#team" className="block text-gray-300 py-2 hover:text-indigo-400">Team</a>
          <a href="#faq" className="block text-gray-300 py-2 hover:text-indigo-400">FAQ</a>
          <a 
            href="https://linktr.ee/ramanujan.maths.club" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block mt-4 text-center"
          >
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300">
              Register Now
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
