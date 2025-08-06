import React from 'react';

const HeroCarousel = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src='/assets/hero-image-2.jpeg'
        alt="Hero image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black opacity-30"></div>

    </div>
  );
};

export default HeroCarousel; 