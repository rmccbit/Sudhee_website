import React from 'react';
import { Calculator, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const coordinators = [
    {
      name: "Dr. Mamta Thakur",
      role: "Faculty Coordinator",
      email: "mamtathakur_maths@cbit.ac.in",
      phone: "+91 96187 78184"
    },
    {
      name: "Vishwas Yeleshwaram",
      role: "Student Conveyer",
      email: "yvishwas40@gmail.com",
      phone: "+91 93923 60632"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About RMC */}
          <div>
            <div className="flex items-center mb-4">
              {/* <Calculator className="h-8 w-8 text-indigo-400 mr-2" /> */}
              <img src="/rmclogo.jpg" alt="Logo" className="h-6 w-6" />
              <span className="ml-4 text-xl font-bold text-white">Ramanujan Maths Club</span>
            </div>
            <p className="text-sm">
              Ramanujan Mathematics Club is dedicated to fostering mathematical thinking
              and problem-solving skills among students.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  rmathsclubcbit@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  +91 9392360632
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Mathematics Department,
                CBIT Hyderabad, 500075
              </p>
            </div>
          </div>

          {/* Coordinators */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Event Coordinators</h3>
            <div className="space-y-4">
              {coordinators.map((coordinator, index) => (
                <div key={index} className="text-sm">
                  <p className="font-semibold text-white">{coordinator.name}</p>
                  <p className="text-indigo-400">{coordinator.role}</p>
                  <p>{coordinator.email}</p>
                  <p>{coordinator.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/rmc.cbit?igsh=eXB4Y2x4bW8yeTN5" className="hover:text-indigo-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/ramanujan-maths-club/" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ramanujan Mathematics Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;