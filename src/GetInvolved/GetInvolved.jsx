import React from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import HopeWallet from './HopeWallet';
import VolunteerSection from './VolunteerSection';
import PartnershipSection from './PartnershipSection';
import ReferralSection from './ReferralSection';

const GetInvolved = () => {
  return (
    <>
          <Header/>
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
 Be Someone's <span className="text-red-600">Miracle</span>        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                Thousands in Pakistan and South Asia await a match. Your cells, time, or support 
                could save a life today.

        </p>
        
    
      </div>
    </div>
  </div>
</div>
<HopeWallet/>
<VolunteerSection/>
<PartnershipSection/>
<ReferralSection/>
 </div>

 <Footer/>
    </>
  )
}

export default GetInvolved