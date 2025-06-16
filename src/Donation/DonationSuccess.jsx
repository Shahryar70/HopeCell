import React from 'react';
import { FaCheckCircle, FaHandHoldingHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const DonationSuccess = () => {
  const { state } = useLocation();
  const donation = state?.donation;
  const message = state?.message || "Thank you for your generous donation!";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center text-teal-500 mb-4">
          <FaCheckCircle size={48} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Donation Recorded!</h1>
        
        <p className="text-gray-600 mb-6">{message}</p>
        
        {donation && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-medium text-teal-600 mb-2">Donation Details</h3>
            <p><span className="font-medium">Amount:</span> {donation.amount} PKR</p>
            <p><span className="font-medium">Payment Method:</span> {donation.paymentMethod}</p>
            {donation.specialAppeal && (
              <p className="mt-2"><span className="font-medium">Your Message:</span> {donation.specialAppeal}</p>
            )}
          </div>
        )}

        <div className="space-y-3">
          <Link
            to="/"
            className="inline-block w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;