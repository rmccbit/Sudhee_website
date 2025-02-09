import React from "react";
import { Calendar, Trophy, BookOpen, Users, PartyPopper, Briefcase } from "lucide-react";

const About = () => {
  const yearlyEvents = [
    "Maths Premier League",
    "National Level E-quiz",
    "Bootcamps",
    "Guest Lectures",
    "Placement Series",
    "Fest Fun",
    
  ];

  const eventIcons = [
    <Trophy className="h-8 w-8 text-yellow-400 mb-4" />, // Maths Premier League
    <BookOpen className="h-8 w-8 text-green-400 mb-4" />, // National Level E-quiz
    <Users className="h-8 w-8 text-blue-400 mb-4" />, // Bootcamps
    <Calendar className="h-8 w-8 text-indigo-400 mb-4" />, // Guest Lectures
    <Briefcase className="h-8 w-8 text-orange-400 mb-4" />, // Placement Series
    <PartyPopper className="h-8 w-8 text-pink-400 mb-4" />, // Fest Fun
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          {/* Logo on the Left */}
          <div className="md:w-1/6 flex justify-center md:justify-start mb-10 md:mb-5">
            <img src="/rmclogo.jpg" alt="RMC Logo" className="h-32 w-32 mt-16" />
          </div>

          {/* About RMC Text */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-bold text-white">About RMC</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto text-justify">
              Ramanujan Maths Club  (RMC) under the department of mathematics is the official mathematics club of CBIT. We in RMC offer a diverse exploration of math and provide a platform for members to delve into various mathematical branches beyond the curriculum. Engaging Activities: Workshops, seminars, competitions, and collaborative problem-solving sessions enhance problem-solving skills. Learning Community: Provides networking opportunities with peers, professors, and professionals, fostering an environment for intellectual growth and exploration.
            </p>
          </div>
        </div>

        {/* Yearly Events Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">
            Our Year-Round Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yearlyEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              >
                {eventIcons[index]}
                <h4 className="text-lg font-semibold text-white">{event}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
