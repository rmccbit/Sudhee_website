import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Clock, Trophy } from 'lucide-react';

const eventData = {
  'paper-presentation': {
    title: "Paper Presentation",
    description: "Present your mathematical research and ideas in front of experts.",
    longDescription: `Share your mathematical insights and research findings with a distinguished panel of experts. 
    This event provides a platform for students to showcase their understanding of advanced mathematical concepts 
    and their applications in various fields.`,
    fee: "₹300 per team",
    venue: "Mathematics Department Seminar Hall",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    rules: [
      "Team size: 2-3 members",
      "Presentation duration: 15 minutes",
      "Q&A session: 5 minutes",
      "Topics must be from pure or applied mathematics",
      "Abstract submission deadline: March 10, 2024"
    ],
    prizes: {
      first: "₹10,000",
      second: "₹7,000",
      third: "₹5,000"
    },
    image: "/paper.png"
  },
  'guest-talk': {
    title: "Guest Talk",
    description: "Interactive sessions with distinguished mathematicians.",
    longDescription: `Engage with renowned mathematicians and learn from their experiences and insights. 
    This session provides a unique opportunity to understand complex mathematical concepts and their real-world applications.`,
    fee: "Free Entry",
    venue: "Main Auditorium",
    date: "March 16, 2024",
    time: "11:00 AM - 1:00 PM",
    speaker: {
      name: "Dr. Sarah Johnson",
      designation: "Professor of Mathematics, MIT",
      topic: "The Beauty of Prime Numbers"
    },
    image: "/guest.png"
  },
  'math-hunt': {
    title: "Math Hunt",
    description: "An exciting treasure hunt with mathematical puzzles and clues.",
    longDescription: `Embark on an adventurous journey across the campus, solving mathematical puzzles and riddles. 
    This event combines physical activity with mathematical problem-solving in a unique and exciting format.`,
    fee: "₹200 per team",
    venue: "College Campus",
    date: "March 16, 2024",
    time: "2:00 PM - 5:00 PM",
    rules: [
      "Team size: 4 members",
      "All clues must be solved in sequence",
      "Use of calculators is permitted",
      "Time limit: 3 hours"
    ],
    prizes: {
      first: "₹8,000",
      second: "₹5,000",
      third: "₹3,000"
    },
    image: "/mathhunt.png"
  },
  'math-relay': {
    title: "Math Relay",
    description: "Team-based mathematical problem-solving race against time.",
    longDescription: `A high-energy mathematical competition where teams solve problems in relay format. 
    Each team member must complete their section before passing to the next, testing both speed and accuracy.`,
    fee: "₹250 per team",
    venue: "Mathematics Block",
    date: "March 17, 2024",
    time: "10:00 AM - 1:00 PM",
    rules: [
      "Team size: 4 members",
      "Each member solves one category of problems",
      "No discussion between team members during solving",
      "Time penalties for incorrect answers"
    ],
    prizes: {
      first: "₹12,000",
      second: "₹8,000",
      third: "₹5,000"
    },
    image: "/relay.png"
  },
  'math-squid-game': {
    title: "Math x Squid Game",
    description: "Mathematical challenges inspired by popular games with eliminations.",
    longDescription: `Experience the thrill of Squid Game combined with mathematical challenges. 
    Participants face elimination rounds with increasing difficulty, testing their mathematical skills under pressure.`,
    fee: "₹400 per person",
    venue: "College Ground",
    date: "March 17, 2024",
    time: "2:00 PM - 6:00 PM",
    rules: [
      "Individual participation only",
      "Multiple elimination rounds",
      "Time-based challenges",
      "Strategic decision making required"
    ],
    prizes: {
      first: "₹15,000",
      second: "₹10,000",
      third: "₹7,000"
    },
    image: "/squidgame.png"
  }
};

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventData[id as keyof typeof eventData];

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2" /> Back to Events
        </button>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="relative h-97">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
              {event.title}
            </h1>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {event.longDescription}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="mr-2 text-indigo-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="mr-2 text-indigo-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-2 text-indigo-400" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="mr-2 text-indigo-400" />
                    <span>{event.fee}</span>
                  </div>
                </div>

                {event.rules && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Rules</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {event.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {event.prizes && (
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Trophy className="mr-2 text-yellow-400" />
                      Prizes
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">First Prize</span>
                        <span className="text-yellow-400 font-semibold">{event.prizes.first}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Second Prize</span>
                        <span className="text-gray-400 font-semibold">{event.prizes.second}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Third Prize</span>
                        <span className="text-gray-400 font-semibold">{event.prizes.third}</span>
                      </div>
                    </div>
                  </div>
                )}

                {event.speaker && (
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Speaker Details</h3>
                    <div className="space-y-2">
                      <p className="text-gray-300">
                        <span className="font-semibold">Name:</span> {event.speaker.name}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-semibold">Designation:</span> {event.speaker.designation}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-semibold">Topic:</span> {event.speaker.topic}
                      </p>
                    </div>
                  </div>
                )}

                <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;