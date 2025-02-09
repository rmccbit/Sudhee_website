import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Inspiring Mathematical Minds';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="relative bg-gray-900 pt-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80"
          alt="Mathematics background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Mathletes 2025
        </h1>
        <p className="mt-6 text-xl text-indigo-400 font-mono">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Join us for an exciting mathematical journey at Technical Fest Sudhee.
          Experience the thrill of mathematics through innovative competitions and events.
        </p>
        <div className="mt-10">
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
  );
};

export default Hero;