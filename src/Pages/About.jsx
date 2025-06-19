import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {FaDna, FaHandHoldingMedical,FaQuoteLeft} from 'react-icons/fa';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SolutionsSlider from './SolutionsSlider';
import ImpactSection from './ImpactSection';
const About = () => {
  const hospitalPartners = [
    { name: "Shaukat Khanum", logo: "/hospitals/sk.png" },
    { name: "Aga Khan", logo: "/hospitals/akuh.png" },
    { name: "Indus Hospital", logo: "/hospitals/indus.png" },
    { name: "SIUT", logo: "/hospitals/siut.png" },
    { name: "AFIP", logo: "/hospitals/afip.png" }
  ];

 

  return (
    <>
      <Header />
      
   
      
   <div className="relative h-[60vh]  overflow-hidden">
  {/* Hero Image */}
  <img 
    src="/Assets/Images/Home/Hero4.png" 
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
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
          Revolutionizing blood cancer care through stem cell donor matching, 
          financial support, and breaking cultural barriers
        </p>
        
    
      </div>
    </div>
  </div>
</div>
    


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Crisis Section - Improved Design */}
<ImpactSection/>
    <SolutionsSlider/>    
       {/* Hospital Partners */}
        <section className="mb-16 bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
            Partnered With Pakistan's Leading Hospitals
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 my-8">
            {hospitalPartners.map((hospital) => (
              <div key={hospital.name} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center w-40 h-20">
                <img 
                  src={hospital.logo} 
                  alt={hospital.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/partners" 
              className="inline-block bg-white border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition font-semibold"
            >
              View Our Hospital Network
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-red-600 to-teal-600 text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Every 3 Minutes, Someone Needs Help</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our movement to transform blood cancer care in Pakistan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/register" 
              className="px-8 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition flex items-center"
            >
              <FaDna className="mr-2" /> Become a Donor
            </Link>
            <Link 
              to="/donate" 
              className="px-8 py-3 bg-white text-teal-600 rounded-lg font-bold hover:bg-gray-100 transition flex items-center"
            >
              <FaHandHoldingMedical className="mr-2" /> Donate Resources
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;