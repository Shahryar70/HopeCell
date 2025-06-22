import React, { useState } from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import VolunteerForm from './VolunteerForm';
import VolunteerSuccess from './VolunteerSuccess';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const VolunteerFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <>
    <Header/>
    <div className="bg-gray-50">
  
 <div className="container pt-12 mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl">
          
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
  Join Our <span className="text-red-600">Volunteer</span> Network</h1>       
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-800 mb-2 max-w-3xl mx-auto">
        Your time and skills can help save lives. Fill the Application and become part of our mission today.
        </p>
      </div>
    </div>
      {/* Conditional Rendering */}
      {isSubmitted ? (
        <VolunteerSuccess />
      ) : (
        <VolunteerForm onSubmitSuccess={handleSubmitSuccess} />
      )}
    </div>
    <Footer/>
    </>
  );
};

export default VolunteerFormPage;