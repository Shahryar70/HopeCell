import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { FaPhoneAlt,FaEnvelope } from 'react-icons/fa';
import SupportTypes from './SupportTypes';
import RequestSupport from './RequestSupport';
import SupportFaqs from './SupportFaqs';
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
            HopeCell provides emotional, logistical, and financial support to patients and families battling blood cancers.
  </p>

</div>

    </div>
  </div>
</div>
   <SupportTypes/>
   <RequestSupport/>
   <SupportFaqs/>
    <Footer/>
    </>
  );
};

export default Support;