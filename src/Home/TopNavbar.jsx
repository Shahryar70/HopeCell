import React from 'react'

const TopNavbar = () => {
  return (
    <div className='bg-slate-900 text-white py-2'>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Side - Contact Info */}
        <div className="flex items-center space-x-4">
          {/* Phone */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:+02038181875" className="text-sm hover:text-teal-400 transition-colors">
              <span className="hidden md:inline">Support Line | </span>0203 8181 875
            </a>
          </div>

          {/* Email */}
          <div className="hidden md:flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="mailto:support@hopecell.org" className="text-sm hover:text-teal-400 transition-colors">
              support@hopecell.org
            </a>
          </div>
        </div>

        {/* Right Side - CTA */}
        <div className="flex items-center space-x-4">
          {/* Emergency Button */}
          <a 
            href="/emergency" 
            className="hidden md:flex items-center text-sm hover:text-rose-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 text-rose-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Urgent Support
          </a>

          {/* Donate Button - Using teal for hope/health association */}
          <a 
            href="/donate" 
            className="px-4 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium shadow-sm transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            DONATE NOW
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar