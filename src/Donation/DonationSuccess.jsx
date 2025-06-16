import React from 'react';
import { FaCheckCircle, FaHandHoldingHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DonationSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center text-teal-500 mb-4">
          <FaCheckCircle size={48} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Donation Successful!</h1>
        <div className="flex justify-center text-teal-500 mb-4">
          <FaHandHoldingHeart size={24} />
        </div>
        <p className="text-gray-600 mb-6">
          Thank you for your generous donation. Your support will help provide critical care to cancer patients in need.
        </p>
        <p className="text-gray-600 mb-8">
          A confirmation email has been sent to your registered email address.
        </p>
        <div className="space-y-3">
          <Link
            to="/"
            className="inline-block w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Return to Home
          </Link>
          <Link
            to="/donate"
            className="inline-block w-full bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Make Another Donation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;