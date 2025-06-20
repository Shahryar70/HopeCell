import React from 'react'

const DonorCTA = () => {
  return (
    <div><section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Save a Life?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Joining our donor registry takes just 5 minutes
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href='/registration' className="px-8 py-3 bg-white text-teal-700 font-bold rounded-full hover:bg-gray-100">
            Register Now
          </a>
          <a className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10">
            How Donation Works
          </a>
        </div>
      </div>
    </section></div>
  )
}

export default DonorCTA