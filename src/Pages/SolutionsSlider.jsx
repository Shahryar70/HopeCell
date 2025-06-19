import React from 'react'
import { FaUniversity,FaWhatsapp,FaMobileAlt,FaHandHoldingMedical, FaBookMedical,FaAmbulance,FaHotel,
    FaUserNurse,FaUsers,FaHandshake,FaBullhorn,FaSchool,FaChevronLeft,FaArrowRight,FaChevronRight, 
    FaNetworkWired} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
const SolutionsSlider = () => {

  
  const solutions = [
  {
    title: "Donor Network",
    icon: <FaNetworkWired />,
    color: "red",
    items: [
      { text: "University donor drives", icon: <FaUniversity />, iconColor: "text-red-500" },
      { text: "WhatsApp-based matching", icon: <FaWhatsapp />, iconColor: "text-green-500" },
      { text: "Mobile typing labs", icon: <FaMobileAlt />, iconColor: "text-blue-500" }
    ],
    link: "/register"
  },
  {
    title: "Hope Wallet",
    icon: <FaHandHoldingMedical />,
    color: "teal",
    items: [
      { text: "Medicine sponsorships", icon: <FaBookMedical />, iconColor: "text-teal-500" },
      { text: "Emergency transport", icon: <FaAmbulance />, iconColor: "text-red-400" },
      { text: "Hospital stay support", icon: <FaHotel />, iconColor: "text-blue-400" }
    ],
    link: "/donate"
  },
  {
    title: "Rural Support",
    icon: <FaUserNurse />,
    color: "blue",
    items: [
      { text: "Mobile diagnostic clinics", icon: <FaMobileAlt />, iconColor: "text-blue-500" },
      { text: "Travel grants", icon: <FaAmbulance />, iconColor: "text-red-400" },
      { text: "Health worker training", icon: <FaUserNurse />, iconColor: "text-green-500" }
    ],
    link: "/volunteer"
  },
  {
    title: "Community Outreach",
    icon: <FaUsers />,
    color: "purple",
    items: [
      { text: "Awareness campaigns", icon: <FaBullhorn />, iconColor: "text-purple-500" },
      { text: "School programs", icon: <FaSchool />, iconColor: "text-blue-400" },
      { text: "Corporate partnerships", icon: <FaHandshake />, iconColor: "text-green-500" }
    ],
    link: "/community"
  }
];

  return (
    <>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
      <h2 className="text-4xl font-extrabold text-gray-900">
        Our <span className="text-red-600">Holistic</span> Approach
      </h2>
      <p className="text-gray-600 max-w-lg border-l-2 border-red-500 pl-4">
        HopeCell: A trusted lifeline in every stem cell of hope
      </p>
    </div>

    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
      }}
      spaceBetween={20}
      slidesPerView={1.2}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3.2 }
      }}
      className="pb-16"
    >
      {solutions.map((item, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className={`relative border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition h-full border-t-4 border-${item.color}-600`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`text-${item.color}-600 text-4xl`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </div>
            
            <ul className="space-y-3 text-gray-600 mb-10">
              {item.items.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className={`${feature.iconColor} mt-1 mr-2 flex-shrink-0`}>
                    {feature.icon}
                  </span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href={item.link} 
              className={`absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition`}
            >
              <FaArrowRight className={`text-lg text-${item.color}-600`} />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Navigation Buttons */}
    <div className="flex justify-end gap-6 mt-4">
      <button className="swiper-button-prev-custom flex items-center gap-2 p-2 rounded-full hover:text-gray-900 text-sm text-gray-700">
        <FaChevronLeft />
        <span>Prev</span>
      </button>

      <button className="swiper-button-next-custom flex items-center gap-2 p-2 rounded-full hover:text-gray-900 text-sm text-gray-700">
        <span>Next</span>
        <FaChevronRight />
      </button>
    </div>
  </div>
</section>
</>
  );
};

export default SolutionsSlider;