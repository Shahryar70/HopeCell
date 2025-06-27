import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { FaPhoneAlt,FaEnvelope } from 'react-icons/fa';
const Support = () => {
  return (
    <>
    <Header/>
       <div className="relative h-[60vh]  overflow-hidden">
  {/* Hero Image */}
  <img 
    src="/Assets/Images/Home/Hero5.png" 
    alt="HopeCell - Supporting Blood Cancer Patients"
    className="w-full h-full object-cover object-center"
  />
  
  {/* Overlay with gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30">
    {/* Content Container - Centered */}
    <div className="container mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
   <div className="text-center max-w-4xl">
  {/* Main Heading */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
    <span className="text-red-600">Hope</span>Cell: Bridging Lives in Pakistan
  </h1>

  {/* Subheading */}
  <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto">
    Revolutionizing blood cancer care through stem cell donor matching, 
    financial support, and breaking cultural barriers.
  </p>

</div>

    </div>
  </div>
</div>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-teal-800 mb-8">Patient Support</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Urgent Needs</h2>
          <ul className="space-y-3">
            <li>• Stem cell donor matching</li>
            <li>• Financial assistance programs</li>
            <li>• Emergency medical support</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-3">
            <li>• Treatment guidance</li>
            <li>• Support groups</li>
            <li>• Clinical trial information</li>
          </ul>
        </div>
      </div>
      
   <div className="mt-10 p-6 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg text-white">
  <h2 className="text-2xl font-semibold mb-2">Need Immediate Assistance?</h2>
  <p className="mb-4">Call or email our 24/7 patient advocate team.</p>
  <div className="flex flex-wrap gap-4">
    <a href="tel:+923088949882" className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
      <FaPhoneAlt className="inline mr-2" />
      Call: +92-308 8949882
    </a>
    <a href="mailto:support@hopecell.org" className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
      <FaEnvelope className="inline mr-2" />
      Email Us
    </a>
  </div>
</div>

    </div>
    <Footer/>
    </>
  );
};

export default Support;