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
    longDescription: `Engage with renowned mathematicians and explore the profound role of statistics in shaping artificial intelligence. This session will unravel the mathematical foundations behind AI, from probability theory to data-driven decision-making. Gain valuable insights into how statistical models power machine learning, predictive analytics, and real-world AI applications. Whether you're a beginner or an expert, this talk will deepen your understanding of the intersection of statistics and AI, helping you navigate the future of intelligent systems.`,
    fee: "Free Entry",
    venue: "soft skills lab",
    date: "March 4, 2025",
    time: "11:00 AM - 1:00 PM",
    speaker: {
      name: " Dr Mallikarjuna Reddy Doodipala",
      designation: " Associate  Professor (Senior) & Data analyst, Geetam",
      venue: "CDC seminar hall",
      topic: "Statistics for shaping Artificial Intelligence"
    },
    image: "/guest.png",
    externalLink: "https://chat.whatsapp.com/GkXkNVqIKtC2AqDpINdj5X"
  },
  'math-hunt': {
    title: "Math Hunt",
    description: "An exciting treasure hunt with mathematical puzzles and clues.",
    longDescription: `Maths Hunt is an interactive math-based puzzle-solving competition designed to test problem-solving skills, logical thinking, and time management. The event follows a treasure hunt format, where teams of two must solve math riddles to find their next location. The event begins at K-Block, where each team receives a chit containing a math puzzle. Successfully solving it unlocks the next block, where another challenge awaits. The cycle continues until they reach the final destination. The fastest team to solve all puzzles wins exciting cash prizes.
`,
    fee: "₹100/- per team of 2",
    venue: "College Campus, near K-block",
    date: "March 4 and 5, 2025",
    time: "10:00 AM - 3:00 PM",
    rules: [
      "Team participation only (2 per team).",
      "All clues must be solved in sequence",
      "Each correct solution leads to the next block.",
      "No external help, mobile use, or shortcuts allowed.",
      "The team finishing in the shortest time wins."
    ],
    prizes: {
      first: "₹1,000",
      second: "₹500",
    },
    image: "/mathhunt.png",
    externalLink: "https://forms.gle/dkssKGkV5nPgPEwt5"
  },
  'math-relay': {
    title: "Math Relay",
    description: "Team-based mathematical problem-solving race against time.",
    longDescription: `The Math Relay, organized by the Ramanujan Maths Club, is an exciting team-based competition designed to enhance mathematical skills, teamwork, and problem-solving. Each team of two or four competes in four engaging rounds, passing a baton after completing their challenge. The event begins with Math Dash, where participants solve questions to advance across tiles. In the Balloon Pop Challenge, they pop balloons to retrieve and solve math problems. The Tangram Puzzle round tests spatial reasoning by reconstructing an image from cut pieces, while Word Scramble challenges teams to form math-related words. The fastest team to complete all rounds wins. Join us for a thrilling math adventure!`,
    fee: "₹50 for team of 2 and ₹80 for team of 4",
    venue: "Near K-Block",
    date: "March 4, 2024",
    time: "11:00 AM - 4:00 PM",
    rules: [
      "Team Formation: Each team must consist of 2 or 4 member",
      "Baton Passing: Teams can proceed to the next round only after completing the current challenge.",
      "Time Limit: Each round has a fixed time limit to solve the given challenge.",
      "Fair Play: Use of external resources or assistance is strictly prohibited.",
      "Winning Criteria: The team that completes all rounds in the shortest time wins."
    ],
    prizes: {
      first: "₹1,000",
      second: "₹500",
    },
    image: "/relay.png",
    externalLink: "https://docs.google.com/forms/d/e/1FAIpQLSeSFy9KAz6rROepwsfsjt6EVyBTpA4Yz_Zd0Bs5bHwQZZYQGA/viewform"
  },
  'math-squid-game': {
    title: "Math x Squid Game",
    description: "Mathematical challenges inspired by popular games with eliminations.",
    longDescription: `Inspired by Squid Game, this event merges math, logic, and strategy into a thrilling competition. Participants navigate through rounds like Red Light, Green Light, solving math problems to advance, and Tug of War, where correct answers build strength. This challenge pushes participants through a series of mind-bending puzzles, intense decision-making scenarios, and strategic gameplay, all designed to test problem-solving skills under pressure. With each round, the competition grows tougher, demanding precision, teamwork, and tactical choices. Will you play it safe, form alliances, or go all in for victory? The choice is yours—but only a few will prevail!`,
    fee: "₹50 per person",
    venue: "Near Power house",
    date: "March 4 and 5, 2025",
    time: "10:00 AM - 3:00 PM",
    rules: [
      "Individual participation only",
      "Elimination Rule: Failing to complete a challenge in time leads to elimination.",
      "Adaptability: Some rounds require teamwork, others test individual skills.",
      "Penalties: Incorrect answers result in time deductions or freezes.",
      "Winning Criteria: The last participant standing wins."
    ],
    prizes: {
      first: "₹1,000",
      second: "₹500",
    },
    image: "/squidgame.png",
    externalLink: "https://forms.gle/Ya4ySmEMZrgUe1cL6"
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
                    </div>
                  </div>
                )}

                {event.speaker && (
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Guest Talk</h3>
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

                <button 
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                    onClick={() => window.location.href = id === 'guest-talk' ? 'https://chat.whatsapp.com/GkXkNVqIKtC2AqDpINdj5X' : event.externalLink}
                    >
                    {id === 'guest-talk' ? "Join the Group for Updates" : "Register Now"}
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