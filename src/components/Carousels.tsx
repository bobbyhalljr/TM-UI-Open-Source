// components/Sliders.tsx
import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
  className?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-screen-md mx-auto overflow-hidden  shadow-md rounded-md">
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-gray-100 rounded-full p-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="w-full h-80 object-cover" />
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-gray-100 rounded-full p-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};