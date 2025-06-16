// src/pages/RegistrationSuccess.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center text-green-500 mb-4">
          <FaCheckCircle size={48} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for registering as a donor. You've taken an important step in potentially saving a life.
        </p>
        <p className="text-gray-600 mb-8">
          We'll contact you if you're a match for a patient in need.
        </p>
        <Link
          to="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};
export default RegistrationSuccess; // Make sure to export
