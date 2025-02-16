import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Presentation, Users, MapPin, Trophy, Gamepad2 } from 'lucide-react';

const Events = () => {
  const navigate = useNavigate();
  
  const events = [
    {
      id: 'paper-presentation',
      title: "Paper Presentation",
      description: "Present your mathematical research and ideas in front of experts.",
      icon: Presentation,
      fee: "₹300 per team",
      venue: "Mathematics Department Seminar Hall",
      externalLink: "https://maths-paper-presentation.netlify.app/" // Change this to your actual link
    },
    {
      id: 'guest-talk',
      title: "Guest Talk",
      description: "Interactive sessions with distinguished mathematicians sharing their insights.",
      icon: Users,
      fee: "Free Entry",
      venue: "Main Auditorium"
    },
    {
      id: 'math-hunt',
      title: "Math Hunt",
      description: "An exciting treasure hunt with mathematical puzzles and clues.",
      icon: MapPin,
      fee: "₹200 per team",
      venue: "College Campus"
    },
    {
      id: 'math-relay',
      title: "Math Relay",
      description: "Team-based mathematical problem-solving race against time.",
      icon: Trophy,
      fee: "₹250 per team",
      venue: "Mathematics Block"
    },
    {
      id: 'math-squid-game',
      title: "Math x Squid Game",
      description: "Mathematical challenges inspired by popular games with eliminations.",
      icon: Gamepad2,
      fee: "₹400 per person",
      venue: "College Ground"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Mathletes Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            >
              <event.icon className="h-10 w-10 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-4">{event.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">
                  <strong className="text-gray-300">Registration Fee:</strong> {event.fee}
                </p>
                <p className="text-sm text-gray-400">
                  <strong className="text-gray-300">Venue:</strong> {event.venue}
                </p>
              </div>
              <button
                className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/25"
                onClick={() => {
                  if (event.id === 'paper-presentation') {
                    window.location.href = event.externalLink; // Redirect to external website
                  } else {
                    navigate(`/event/${event.id}`); // Navigate internally
                  }
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
