import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery
// import './Team.css';

const data = [
  {
    id: 1,
    title: 'Mountain View',
    description: 'A beautiful view of the mountains during sunset.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Mountain+View',
  },
  {
    id: 2,
    title: 'Ocean Breeze',
    description: 'Feel the fresh ocean breeze and the sound of waves.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Ocean+Breeze',
  },
  {
    id: 3,
    title: 'Forest Retreat',
    description: 'Escape into the calmness of a deep forest.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Forest+Retreat',
  },
  {
    id: 4,
    title: 'Desert Dunes',
    description: 'Experience the vastness of endless desert dunes.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Desert+Dunes',
  },
  {
    id: 5,
    title: 'City Lights',
    description: 'Explore the bustling energy of a city at night.',
    imageUrl: 'https://via.placeholder.com/600x400?text=City+Lights',
  },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine the number of cards to show based on screen size
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const cardsToShow = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
              <div className='text-center mb-12'>
        <h1 className='text-white font-bold text-3xl md:text-4xl'>Our Team</h1>
        <p className="text-gray-400 text-lg mt-2">why we are unique from others..</p>
        </div>
      <div className="relative w-full max-w-5xl overflow-hidden">

        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="flex space-x-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            {data.slice(currentIndex, currentIndex + cardsToShow).map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-full bg-white rounded-lg shadow-md overflow-hidden relative"
                style={{ width: `calc(100% / ${cardsToShow})` }}
              >
                <img src={card.imageUrl} alt={card.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
                  <h2 className="text-2xl font-bold text-white mb-2">{card.title}</h2>
                  <p className="text-gray-200">{card.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-700 hover:text-blue-500"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-700 hover:text-blue-500"
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex mt-4 space-x-2">
        {data.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
