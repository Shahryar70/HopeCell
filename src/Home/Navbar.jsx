import React, { useState } from 'react';
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";

export const Navbar = ({ withTop = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);

  return (
    <nav className={`z-50 w-full shadow-md bg-white ${withTop ? 'sticky top-0' : 'fixed top-0'}`}>
      <div className='container flex items-center justify-between px-4 py-3'>
        {/* Logo */}
        <a href="/" className='text-white'>
          <img 
            src="Assets/Images/Home/HopeLogo_2.png" 
            alt="HopeCell Logo" 
            className="h-20 w-auto object-contain" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-base uppercase font-semibold hover:text-red-600 transition-colors">
            HOME
          </a>
          <a href="/patients" className="text-base uppercase font-semibold hover:text-red-600 transition-colors">
            FOR PATIENTS
          </a>
          <a href="/donors" className="text-base uppercase font-semibold hover:text-red-600 transition-colors">
            FOR DONORS
          </a>
          <a href="/get-involved" className="text-base  uppercase font-semibold hover:text-red-600 transition-colors">
          GET Involved
          </a>
          <a href="/about" className="text-base uppercase font-semibold hover:text-red-600 transition-colors">
            ABOUT US
          </a>
          
          {/* Support Dropdown - Fixed */}
          <div className="relative group">
            <button 
              className="text-base uppercase font-semibold hover:text-red-600 flex items-center gap-1"
              onMouseEnter={() => setSupportDropdownOpen(true)}
              onMouseLeave={() => setSupportDropdownOpen(false)}
            >
              SUPPORT <BiChevronDown className="text-xl" />
            </button>
            {supportDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50"
                onMouseEnter={() => setSupportDropdownOpen(true)}
                onMouseLeave={() => setSupportDropdownOpen(false)}
              >
                <a href="/financial-aid" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-red-600">
                  Financial Aid
                </a>
                <a href="/volunteer" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-red-600">
                  Volunteer
                </a>
                <a href="/counseling" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-red-600">
                  Counseling
                </a>
              </div>
            )}
          </div>
          
          {/* Action Button */}
          <a 
            href="/registration" 
            className="bg-red-600 uppercase hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            JOIN DONOR REGISTRY
          </a>
        </div>
<button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>

        {/* Mobile Drawer - Updated to left-side sliding panel */}
        <div className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Overlay */}
          <div 
            className={`absolute inset-0 bg-black bg-opacity-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer Panel */}
          <div className="relative h-full w-80 max-w-full bg-white shadow-lg flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <img 
                src="Assets/Images/Home/HopeLogo_2.png" 
                alt="HopeCell Logo" 
                className="h-16 w-auto object-contain" 
              />
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BiX size={28} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <a href="/" className="block py-3 text-lg font-medium hover:text-red-600 border-b border-gray-100">Home</a>
              <a className="block py-3 text-lg font-medium hover:text-red-600 border-b border-gray-100">For Patients</a>
              <a href="/donate" className="block py-3 text-lg font-medium hover:text-red-600 border-b border-gray-100">Donation</a>
              <a href="/get-involved" className="block py-3 text-lg font-medium hover:text-red-600 border-b border-gray-100">Get Involved</a>
              <a href="/about" className="block py-3 text-lg font-medium hover:text-red-600 border-b border-gray-100">About Us</a>
              
              {/* Support Accordion */}
              <div className="pt-2">
                <button 
                  className="flex items-center justify-between w-full py-3 text-lg font-medium hover:text-red-600 border-b border-gray-100"
                  onClick={() => setSupportDropdownOpen(!supportDropdownOpen)}
                >
                  <span>Support</span>
                  <BiChevronDown className={`transition-transform ${supportDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {supportDropdownOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <a href="/financial-aid" className="block py-2 text-base hover:text-red-600">Financial Aid</a>
                    <a href="/volunteer" className="block py-2 text-base hover:text-red-600">Volunteer</a>
                    <a href="/counseling" className="block py-2 text-base hover:text-red-600">Counseling</a>
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t">
              <a 
                href="/register-donor" 
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-full font-medium mb-3"
              >
                Join Registry
              </a>
              <a 
                href="/donate" 
                className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-full font-medium"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};