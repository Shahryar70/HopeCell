import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa'
const SuccessPartner = ({ onReset }) => {
  return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <div className="text-green-500 text-6xl mb-4 flex justify-center">
          <FaHandshake />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          We've received your partnership request. Our team will contact you within 2 business days.
        </p>
        <button 
          onClick={onReset}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition"
        >
          Submit Another
        </button>
      </div>
    </div>  )
}

export default SuccessPartner