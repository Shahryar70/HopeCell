import React, { useState } from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import VolunteerForm from './VolunteerForm';
import VolunteerSuccess from './VolunteerSuccess';

const VolunteerFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md mb-6">
            <FaHandsHelping className="text-red-600 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-red-600">Volunteer</span> Network
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your time and skills can help save lives. Become part of our mission today.
          </p>
        </div>
      </section>

      {/* Conditional Rendering */}
      {isSubmitted ? (
        <VolunteerSuccess />
      ) : (
        <VolunteerForm onSubmitSuccess={handleSubmitSuccess} />
      )}
    </div>
  );
};

export default VolunteerFormPage;