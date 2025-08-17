import React, { useState } from 'react';
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const Navbar = ({ withTop = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);

  return (
    <nav className={`z-30 w-full shadow-md bg-white ${withTop ? 'sticky top-0' : 'fixed top-0'}`}>
      <div className='container flex items-center justify-between px-4 py-3'>
        {/* HopeCell Logo*/}
        <NavLink to="/" className='text-white'>
          <img 
            src="Assets/Images/Home/HopeLogo_2.png" 
            alt="HopeCell Logo" 
            className="h-20 w-auto object-contain" 
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `text-base uppercase font-semibold transition-colors ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink 
          
            className={({ isActive }) =>
              `text-base uppercase font-semibold transition-colors ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            FOR PATIENTS
          </NavLink>

          <NavLink 
            to="/donate"
            className={({ isActive }) =>
              `text-base uppercase font-semibold transition-colors ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            FOR DONATION
          </NavLink>

          <NavLink 
            to="/get-involved"
            className={({ isActive }) =>
              `text-base uppercase font-semibold transition-colors ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            GET INVOLVED
          </NavLink>

          <NavLink 
            to="/about"
            className={({ isActive }) =>
              `text-base uppercase font-semibold transition-colors ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            ABOUT US
          </NavLink>

          <NavLink 
            to="/support"
            className={({ isActive }) =>
              `text-base uppercase font-semibold transition-colors ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            GET SUPPORT
          </NavLink>

          {/* Action Button */}
          <NavLink 
            to="/registration" 
            className="bg-red-600 uppercase hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            JOIN DONOR REGISTRY
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>

        {/* Mobile Drawer */}
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
              <NavLink 
                to="/"
                className={({ isActive }) =>
                  `block py-3 text-lg font-medium border-b border-gray-100 ${
                    isActive ? "text-red-600" : "hover:text-red-600"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink 
                to="/patients"
                className={({ isActive }) =>
                  `block py-3 text-lg font-medium border-b border-gray-100 ${
                    isActive ? "text-red-600" : "hover:text-red-600"
                  }`
                }
              >
                For Patients
              </NavLink>

              <NavLink 
                to="/donate"
                className={({ isActive }) =>
                  `block py-3 text-lg font-medium border-b border-gray-100 ${
                    isActive ? "text-red-600" : "hover:text-red-600"
                  }`
                }
              >
                Donation
              </NavLink>

              <NavLink 
                to="/get-involved"
                className={({ isActive }) =>
                  `block py-3 text-lg font-medium border-b border-gray-100 ${
                    isActive ? "text-red-600" : "hover:text-red-600"
                  }`
                }
              >
                Get Involved
              </NavLink>

              <NavLink 
                to="/about"
                className={({ isActive }) =>
                  `block py-3 text-lg font-medium border-b border-gray-100 ${
                    isActive ? "text-red-600" : "hover:text-red-600"
                  }`
                }
              >
                About Us
              </NavLink>

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
                    <NavLink to="/financial-aid" className="block py-2 text-base hover:text-red-600">Financial Aid</NavLink>
                    <NavLink to="/volunteer" className="block py-2 text-base hover:text-red-600">Volunteer</NavLink>
                    <NavLink to="/counseling" className="block py-2 text-base hover:text-red-600">Counseling</NavLink>
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t">
              <NavLink 
                to="/register-donor" 
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-full font-medium mb-3"
              >
                Join Registry
              </NavLink>
              <NavLink 
                to="/donate" 
                className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-full font-medium"
              >
                Donate
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
