import React from 'react';

const HeroBackground = ({ bgImage, bgMobile }) => {
  return (
    <div className="relative">
      {/* Mobile image */}
      <div className="block md:hidden overflow-hidden">
        <img
          src={bgMobile || bgImage}
          alt="Hero"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50 text-white px-4">
          <h2 className="text-xl font-semibold mb-2 text-center">HopeCell: A Lifeline in Every Healing Cell</h2>
          <button className="bg-red-600 px-4 py-2 rounded-3xl text-sm">Learn More</button>
        </div>
      </div>

      {/* Desktop background */}
      <div
        className="hidden md:flex w-full h-[440px] bg-center bg-cover relative items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="text-4xl font-bold mb-4">HopeCell: A Lifeline in Every Healing Cell</h1>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Empowering blood cancer patients with support, knowledge, and stem cell care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="bg-red-600 rounded-3xl px-6 py-3 cursor-pointer">Learn More</a>
            <a className="bg-white text-teal-700 px-6 py-3 rounded-3xl cursor-pointer">Get Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
