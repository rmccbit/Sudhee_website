import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const team = [
    {
      name: "Dr. Mamta Thakur",
      role: "Faculty Advisor",
      image: "/mamta.jpg",
    },
    {
      name: "Trishika Reddy",
      role: "President",
      image: "/trishika.jpg",
    },
    {
      name: "Shruthi Reddy",
      role: "Vice President",
      image: "/Shruthi.jpg",
    },
    {
      name: "Aishwaraya Bura",
      role: "Vice President",
      image: "/aishwarya.jpeg",
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-indigo-400 mb-3">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;