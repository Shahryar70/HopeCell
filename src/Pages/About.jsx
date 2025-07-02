import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SolutionsSlider from './SolutionsSlider';
import ImpactSection from './ImpactSection';
import Testimonials from '../Home/Testimonials';
import DonorCTA from '../Home/DonorCTA';
import OurValues from './OurValues';
const About = () => {


 

  return (
    <>
      <Header />
         <div className='bg-white'>
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
      <ImpactSection/>
         <OurValues/>
    <SolutionsSlider/>    
         <Testimonials/>
      <DonorCTA/>
      </div>
      
      <Footer />
    </>
  );
};

export default About;