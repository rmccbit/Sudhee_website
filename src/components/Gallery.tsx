import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "/parade.jpg",
      title: "RMC Club Parade",
      description: "The RMC Club Parade at Shruthi 2024 was an exhilarating experience, filled with energy, enthusiasm, and unity. As we proudly marched through the campus, representing the Ramanujan Maths Club(RMC), the atmosphere was electrifying with cheers, colors, and creative banners. It was a moment of pure pride, showcasing our club’s vision, dedication, and impact. The parade wasn’t just about walking—it was about making a statement, celebrating our journey, and embracing the vibrant CBIT spirit. This unforgettable experience strengthened our bond and reminded us why Team RMC stands out! 🚩📸🔥 #RMCParade #Shruthi2024",
      date: "March 2024"
    },
    {
      url: "/miniminds.jpg",
      title: "Math for MiniMinds",
      description: "In collaboration with NSS CBIT, Team RMC brought the joy of mathematics to young learners through our Math for MiniMinds event. Visiting a school filled with eager students, we turned numbers into an exciting adventure with interactive puzzles, engaging games, and hands-on learning. Laughter and curiosity filled the air as we made math fun, accessible, and inspiring. Witnessing their enthusiasm and problem-solving spirit was truly rewarding. This experience reinforced our belief that learning is best when it’s enjoyable. A day of smiles, numbers, and limitless possibilities! 🧮✨ #MathForMiniMinds #RMCCBIT",
      date: "May 2024"
    },
    {
      url: "/bootcamp.jpg",
      title: "Math For Machine Learning Bootcamp",
      description: "The Math for Machine Learning Bootcamp, hosted by Team RMC, was an insightful journey into the mathematical foundations of AI and ML. A highlight of the event was an enriching lecture by Dr. C.S. Sastry, Professor at IIT Hyderabad, who provided deep insights into linear algebra, probability, and optimization—key pillars of machine learning. Engaging sessions, hands-on problem-solving, and interactive discussions made complex concepts accessible and exciting. This bootcamp empowered participants with the mathematical intuition needed to excel in ML, blending theory with real-world applications. A perfect fusion of math, learning, and inspiration! 🔢🤖✨ #MathForML #RMCCBIT",
      date: "November 2024"
    },
    {
      url: "/code.jpg",
      title: "Code Crackers - Math X Coding ",
      description: "Code Crackers, a unique Math × Coding event by Team RMC, blended logic, numbers, and programming into an exciting challenge. Participants dived into mathematical puzzles, algorithmic problems, and coding tasks that tested both their analytical and programming skills. The event pushed boundaries, encouraging creative problem-solving and logical reasoning. Whether decoding patterns, optimizing solutions, or cracking number-based algorithms, every challenge sparked curiosity and excitement. It was a thrilling experience where math and coding converged, proving that the best coders are also great mathematicians! A perfect fusion of logic, numbers, and code! 🔢💻✨ #CodeCrackers #MathXCode #RMCCBIT",
      date: "February 2024"
    },
    {
      url: "/fest.jpg",
      title: "Shruthi 2024 Cultural Day - Team RMC",
      description: "Shruthi 2024 was an unforgettable celebration of culture, creativity, and camaraderie. As Team RMC, we were thrilled to be part of this electrifying event, where art, music, and dance came alive. From mesmerizing performances to energetic competitions, every moment was filled with passion and joy. The vibrant atmosphere, enthusiastic participants, and roaring cheers made it an experience to cherish forever. It wasn’t just a cultural day; it was a festival of  unity and unforgettable memories. Shruthi 2024 will always hold a special place in our hearts! 🎭🎶🔥 #TeamRMC #Shruthi2024",
      date: "March 2024"
    },
    {
      url: "/felicitation.jpg",
      title: "Alumni Reunion",
      description: "The RMC Alumni Reunion was a heartfelt celebration, bringing together the pillars of our club—our beloved alumni. We had the privilege of felicitating those who dedicated their time and passion to Team RMC, shaping it into what it is today. The event was filled with nostalgia, laughter, and shared memories, as past and present members came together to relive the journey. Their stories, experiences, and guidance continue to inspire us, strengthening the RMC legacy. It wasn’t just a reunion—it was a homecoming, a celebration of friendship and growth. Once RMC, always RMC! 🎙️📸✨ #RMCReunion #ForeverRMC",
      date: "October 2023"
    },
    {
      url: "/poster.jpg",
      title: "Poster Launch",
      description: "The Sudhee 2024 Poster Launch was a moment of excitement and anticipation, marking the official countdown to CBIT’s most awaited techno-cultural fest. Team RMC proudly unveiled the vibrant and dynamic poster, capturing the essence of innovation, culture, and excellence that Sudhee represents. The launch was met with cheers, energy, and enthusiasm, setting the stage for an unforgettable event. This moment symbolized months of dedication and creativity, bringing together students, faculty, and organizers in celebration. With the spirit of Sudhee 2024 ignited, we are ready to create history! Let the countdown begin! 🚀🎭✨ #Sudhee2024 #PosterLaunch #RMCCBIT",
      date: "January 2024"
    },
    {
      url: "/book.jpg",
      title: "Mathematics for ML - Book Launch",
      description: "As part of the Math for Machine Learning Bootcamp, Team RMC proudly hosted the launch of Mathematics for ML, a book dedicated to building strong mathematical foundations for machine learning. The event was graced by Dr. C.S. Sastry, Professor at IIT Hyderabad, whose insights into the subject added immense value. The book serves as a guiding resource, covering essential concepts like linear algebra, probability, and optimization. This launch marked a significant step in making ML education more accessible and structured. A milestone moment in our journey of learning and innovation! 📖🤖✨ #MathForML #BookLaunch #RMCCBIT",
      date: "December 2024"
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Past Events Gallery
        </h2>

        {/* Image Slider */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            animate={{ x: `-${currentIndex * 100}%` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full px-2">
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                    <p className="text-gray-300">{image.date}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-black/80 transition"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-black/80 transition"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <div className="relative max-w-4xl w-full bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-4 top-4 text-white hover:text-gray-300 z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <motion.img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].title}
                  className="w-full h-[450px] object-cover"
                  initial={{ scale: 0.7 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-gray-300 mb-2">{images[selectedImage].date}</p>
                  <p className="text-gray-400">{images[selectedImage].description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
