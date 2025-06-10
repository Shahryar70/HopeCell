import React, { useEffect, useState } from 'react';
import TopNavbar from './TopNavbar';
import { Navbar } from './Navbar';

const Header = () => {
  const [showTop, setShowTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger hide after scrolling past 30px (makes it smoother)
      setShowTop(window.scrollY < 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showTop ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <TopNavbar />
      </div>
      <Navbar withTop={showTop} />
    </div>
  );
};

export default Header;
