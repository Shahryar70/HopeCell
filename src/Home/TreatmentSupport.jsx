import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaHandHoldingUsd, FaHospitalSymbol, FaUserNurse, FaShareAlt, FaArrowRight} from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TreatmentSupport = () => {
  const resources = [
    {
      title: "Financial Aid",
      desc: "Grants for chemotherapy & transplants",
      icon: <FaHandHoldingUsd className="text-teal-600 text-4xl" />
    },
    {
      title: "Hospital Partnerships",
      desc: "Priority access to top cancer centers",
      icon: <FaHospitalSymbol className="text-red-600 text-4xl" />
    },
    {
      title: "Caregiver Training",
      desc: "Free workshops for families",
      icon: <FaUserNurse className="text-teal-600 text-4xl" />
    },
  {
  title: "Refer a Friend",
  desc: "Share with Your Contacts",
  icon: <FaShareAlt className="text-red-600 text-4xl" />
}

  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
          <h2 className="text-4xl font-extrabold text-gray-900">Support our Mission</h2>
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
          {resources.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="relative border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition h-full">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-10">{item.desc}</p>
                <a className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition">
                  <FaArrowRight className="text-lg text-gray-800" />
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
  );
};

export default TreatmentSupport;
