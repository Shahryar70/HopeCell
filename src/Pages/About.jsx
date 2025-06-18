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
      
      {/* Hero Banner with Swiper */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        loop={true}
        className="h-[500px]"
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide key={slide} className="relative">
            <img 
              src={`/hero-banner-${slide}.jpg`} 
              alt={`HopeCell Banner ${slide}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="text-red-400">Hope</span>Cell: Bridging Lives in Pakistan
                </h1>
                <p className="text-xl text-white mb-8">
                  Revolutionizing blood cancer care through stem cell donor matching and holistic support
                </p>
                <Link 
                  to="/register" 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition"
                >
                  Join Our Mission
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev text-white">
          <FaChevronLeft size={24} />
        </div>
        <div className="swiper-button-next text-white">
          <FaChevronRight size={24} />
        </div>
      </Swiper>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Crisis Section */}
        <section className="mb-16 bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Blood Cancer Crisis in Pakistan</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-800 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-xl font-bold">72%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Lack of Matched Donors</h3>
                    <p className="text-gray-600">
                      Pakistani patients cannot find family matches, needing unrelated donors
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-800 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-xl font-bold">3x</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Higher Mortality</h3>
                    <p className="text-gray-600">
                      Blood cancer death rates compared to developed nations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-800 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-xl font-bold">0.01%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Registry Participation</h3>
                    <p className="text-gray-600">
                      Of population in stem cell registries vs 2% in West
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-600 text-white p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Cultural Barriers We Address</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-white text-red-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span>Fatwas from Islamic scholars endorsing donation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-red-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span>Community workshops in local languages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-red-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span>Female donor advocacy programs</span>
                  </li>
                </ul>
              </div>
              <img 
                src="/images/fatwa-certificate.jpg" 
                alt="Islamic Fatwa Certificate"
                className="rounded-lg border-2 border-white"
              />
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