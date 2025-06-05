import React from 'react'
import { BiChevronDown, BiMenu } from "react-icons/bi";
export const Navbar = () => {
  return (
    <div>
  <nav className='sticky top-0 left-0 w-full shadow-md bg-white z-50'>
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
      <div className="hidden sm:flex items-center gap-8">
        <a href="/" className="text-base font-semibold hover:text-red-600 transition-colors">
          HOME
        </a>
        <a href="/patients" className="text-base font-semibold hover:text-red-600 transition-colors">
          FOR PATIENTS
        </a>
        <a href="/donors" className="text-base font-semibold hover:text-red-600 transition-colors">
          FOR DONORS
        </a>
        <a href="/resources" className="text-base font-semibold hover:text-red-600 transition-colors">
          RESOURCES
        </a>
          <a href="/about" className="text-base font-semibold hover:text-red-600 transition-colors">
          ABOUT US
        </a>
        {/* Support Dropdown */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="text-base font-semibold hover:text-red-600 cursor-pointer flex items-center gap-1">
            SUPPORT <BiChevronDown className="text-xl" />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-48">
            <li><a href="/financial-aid" className="text-base font-semibold hover:bg-gray-100 hover:text-red-600">Financial Aid</a></li>
            <li><a href="/volunteer" className="text-base font-semibold hover:bg-gray-100 hover:text-red-600">Volunteer</a></li>
            <li><a href="/counseling" className="text-base font-semibold hover:bg-gray-100 hover:text-red-600">Counseling</a></li>
          </ul>
        </div>

      
        
        {/* Action Buttons */}
        <a href="/register-donor" className="min-h-0 rounded-full btn bg-red-600 text-white hover:bg-red-700 px-6">
          JOIN DONOR REGISTRY
        </a>
      
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <BiMenu className="text-2xl" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-56 z-50">
            <li><a href="/" className="text-base">Home</a></li>
            <li><a href="/patients" className="text-base">For Patients</a></li>
            <li><a href="/donors" className="text-base">For Donors</a></li>
            <li><a href="/resources" className="text-base">Resources</a></li>
            <li className="menu-title"><span className="text-sm font-semibold">Support</span></li>
            <li><a href="/financial-aid" className="text-sm">Financial Aid</a></li>
            <li><a href="/volunteer" className="text-sm">Volunteer</a></li>
            <li><a href="/counseling" className="text-sm">Counseling</a></li>
            <li><a href="/about" className="text-base">About Us</a></li>
            <li className="mt-2">
              <a href="/register-donor" className="btn btn-sm btn-error text-white">Join Registry</a>
            </li>
            <li>
              <a href="/donate" className="btn btn-sm btn-success text-white">Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
  )
}
