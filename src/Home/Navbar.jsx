import React from 'react'
export const Navbar = () => {
  return (
    <div>
        <nav className='sticky top-0 left-0 w-full shadow-md bg-white'>
          <div className='container flex items-center justify-between px-4'>
     <div>
      {/* Logo */}
      <a className='text-white '>
             <img src="Assets/Images/Home/HopeLogo_2.png" alt="Travel Campus Logo" height={90} width={140} priority />
       </a>
     </div>
     {/* Desktop Menu */}
     <div className='hidden sm:flex items-center justify-center gap-8 '>
     <a className='text-base font-bold text-gray-900 hover:text-red-600'>Home</a>
       <a className='text-base font-bold text-gray-900 hover:text-red-600'>Update Details</a>
        <a className='text-base font-bold text-gray-900 hover:text-red-600'>About Us</a>
     <a></a>
     </div>
          </div>
        </nav>
    </div>
  )
}
