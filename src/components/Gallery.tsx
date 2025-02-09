import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "/fest.jpg",
      title: "Shruthi 2024 Cultural Day - Team RMC",
      description: "Over 200 students participated in our annual mathematics competition, solving complex problems and showcasing their analytical skills.",
      date: "March 2024"
    },
    {
      url: "/parade.jpg",
      title: "RMC Club Parade",
      description: "Undergraduate students presented their research findings in various fields of mathematics.",
      date: "March 2024"
    },
    {
      url: "/miniminds.jpg",
      title: "Math for MiniMinds",
      description: "Prof. Alan Thompson from MIT delivered an inspiring lecture on 'The Beauty of Prime Numbers' to a packed auditorium.",
      date: "May 2024"
    },
    {
      url: "/felicitation.jpg",
      title: "Alumni Reunion",
      description: "A hands-on workshop where students learned advanced problem-solving techniques for competitive mathematics.",
      date: "October 2023"
    },
    {
      url: "/bootcamp.jpg",
      title: "Math For Machine Learning Bootcamp",
      description: "Students showcased their mathematical models and projects, demonstrating real-world applications of mathematical concepts.",
      date: "November 2024"
    },
    {
      url: "/code.jpg",
      title: "Code Crackers - Math X Coding ",
      description: "A day-long celebration featuring mathematical games, puzzles, and interactive demonstrations.",
      date: "February 2024"
    },
    {
      url: "/poster.jpg",
      title: "Poster Launch",
      description: "Teams from various colleges competed in our annual mathematics quiz championship.",
      date: "January 2024"
    },
    {
      url: "/book.jpg",
      title: "Mathematics for ML - Book Launch",
      description: "A week-long celebration of mathematics featuring competitions, lectures, and workshops.",
      date: "December 2024"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Past Events Gallery</h2>
        
        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="min-w-full px-4">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                        <p className="text-gray-300">{image.date}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <div className="relative max-w-4xl w-full bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-4 top-4 text-white hover:text-gray-300 z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-gray-300 mb-2">{images[selectedImage].date}</p>
                  <p className="text-gray-400">
                    {images[selectedImage].description}
                  </p>
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