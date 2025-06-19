import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { 
  FaChevronLeft, 
  FaChevronRight,
  FaDna,
  FaHandHoldingMedical,
  FaAmbulance,
  FaHotel,
  FaUniversity,
  FaWhatsapp,
  FaMobileAlt,
  FaBookMedical,
  FaUserNurse,
  FaQuoteLeft
} from 'react-icons/fa';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  const hospitalPartners = [
    { name: "Shaukat Khanum", logo: "/hospitals/sk.png" },
    { name: "Aga Khan", logo: "/hospitals/akuh.png" },
    { name: "Indus Hospital", logo: "/hospitals/indus.png" },
    { name: "SIUT", logo: "/hospitals/siut.png" },
    { name: "AFIP", logo: "/hospitals/afip.png" }
  ];

  const testimonials = [
    {
      quote: "HopeCell found me a matching donor when no one else could. I'm alive today because of them.",
      author: "Ali R., Leukemia Survivor"
    },
    {
      quote: "Their rural mobile clinic diagnosed my blood cancer early. In villages, we have no access to such facilities.",
      author: "Fatima K., Thalassemia Patient"
    },
    {
      quote: "As a religious scholar, I endorse HopeCell's work. They've shown stem cell donation is compatible with Islam.",
      author: "Maulana Tariq, Islamic Scholar"
    }
  ];

  return (
    <>
      <Header />
      
   
      
   <div className="relative h-[500px] md:h-[600px] overflow-hidden">
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
        {/* Organization Name */}
        <div className="mb-4">
          <span className="text-white text-lg font-semibold tracking-wider">
            HOPECELL FOUNDATION
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          <span className="text-red-600">Hope</span>Cell: 
          <span className="block mt-2">Bridging Lives in Pakistan</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
          Revolutionizing blood cancer care through stem cell donor matching, 
          financial support, and breaking cultural barriers
        </p>
        
        {/* Single CTA Button - Centered */}
        <div className="flex justify-center">
          <Link 
            to="/register" 
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Our Mission
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
    


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Crisis Section - Improved Design */}
<section className="mb-16 bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-100">
  <div className="grid md:grid-cols-2 gap-0">
    {/* Left Column - Statistics */}
    <div className="p-8 md:p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-red-600 mb-8 relative pb-4">
        The Blood Cancer Crisis in Pakistan
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 rounded-full"></span>
      </h2>
      
      <div className="space-y-8">
        <div className="flex items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-red-100 text-red-800 rounded-lg p-4 mr-5 flex-shrink-0 text-center min-w-[80px]">
            <span className="text-2xl font-bold block">72%</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Lack of Matched Donors</h3>
            <p className="text-gray-600">
              Pakistani patients cannot find family matches, needing unrelated donors
            </p>
          </div>
        </div>
        
        <div className="flex items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-red-100 text-red-800 rounded-lg p-4 mr-5 flex-shrink-0 text-center min-w-[80px]">
            <span className="text-2xl font-bold block">3x</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Higher Mortality Rate</h3>
            <p className="text-gray-600">
              Blood cancer death rates compared to developed nations
            </p>
          </div>
        </div>
        
        <div className="flex items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-red-100 text-red-800 rounded-lg p-4 mr-5 flex-shrink-0 text-center min-w-[80px]">
            <span className="text-2xl font-bold block">0.01%</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Registry Participation</h3>
            <p className="text-gray-600">
              Of population in stem cell registries vs 2% in Western countries
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column - Cultural Solutions */}
    <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 md:p-10 flex flex-col">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 relative pb-4">
          Breaking Cultural Barriers
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-white rounded-full"></span>
        </h3>
        
        <ul className="space-y-5">
          <li className="flex items-start bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <span className="bg-white text-red-600 rounded-full p-2 mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-lg">Religious Endorsements</h4>
              <p className="text-red-100">Fatwas from Islamic scholars supporting donation</p>
            </div>
          </li>
          
          <li className="flex items-start bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <span className="bg-white text-red-600 rounded-full p-2 mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-lg">Local Language Outreach</h4>
              <p className="text-red-100">Community workshops in Urdu, Pashto, and Sindhi</p>
            </div>
          </li>
          
          <li className="flex items-start bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <span className="bg-white text-red-600 rounded-full p-2 mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-lg">Women's Participation</h4>
              <p className="text-red-100">Female donor advocacy and education programs</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="mt-auto">
        <img 
          src="/images/fatwa-certificate.jpg" 
          alt="Islamic Fatwa Certificate"
          className="rounded-lg border-2 border-white/30 w-full object-cover h-48 md:h-56"
        />
        <p className="text-center text-red-100 text-sm mt-2">
          Official endorsement from religious authorities
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Our Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
            Our <span className="text-red-600">Holistic</span> Approach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Donor Network */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600 transform hover:-translate-y-2 transition duration-300">
              <div className="text-red-600 text-4xl mb-4 flex items-center">
                <FaDna className="mr-3" />
                <span className="text-2xl font-bold">Donor Network</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaUniversity className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <span>University donor drives</span>
                </li>
                <li className="flex items-start">
                  <FaWhatsapp className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>WhatsApp-based matching</span>
                </li>
                <li className="flex items-start">
                  <FaMobileAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Mobile typing labs</span>
                </li>
              </ul>
              <Link 
                to="/register" 
                className="inline-block mt-6 text-red-600 font-semibold hover:underline  items-center"
              >
                Join Registry <FaChevronRight className="ml-1" />
              </Link>
            </div>
            
            {/* Hope Wallet */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-600 transform hover:-translate-y-2 transition duration-300">
              <div className="text-teal-600 text-4xl mb-4 flex items-center">
                <FaHandHoldingMedical className="mr-3" />
                <span className="text-2xl font-bold">Hope Wallet</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaBookMedical className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Medicine sponsorships</span>
                </li>
                <li className="flex items-start">
                  <FaAmbulance className="text-red-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Emergency transport</span>
                </li>
                <li className="flex items-start">
                  <FaHotel className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Hospital stay support</span>
                </li>
              </ul>
              <Link 
                to="/donate" 
                className="inline-block mt-6 text-teal-600 font-semibold hover:underline items-center"
              >
                Support a Patient <FaChevronRight className="ml-1" />
              </Link>
            </div>
            
            {/* Rural Outreach */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 transform hover:-translate-y-2 transition duration-300">
              <div className="text-blue-600 text-4xl mb-4 flex items-center">
                <FaUserNurse className="mr-3" />
                <span className="text-2xl font-bold">Rural Support</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaMobileAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Mobile diagnostic clinics</span>
                </li>
                <li className="flex items-start">
                  <FaAmbulance className="text-red-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Travel grants</span>
                </li>
                <li className="flex items-start">
                  <FaUserNurse className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Health worker training</span>
                </li>
              </ul>
              <Link 
                to="/volunteer" 
                className="inline-block mt-6 text-blue-600 font-semibold hover:underline items-center"
              >
                Volunteer <FaChevronRight className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 bg-teal-50 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
            Voices of Hope
          </h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <FaQuoteLeft className="text-teal-300 text-3xl mb-4" />
                  <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                  <p className="font-semibold text-teal-800">{testimonial.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

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