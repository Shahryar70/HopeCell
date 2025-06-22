import React, { useState } from 'react';
import {
  FaHandshake,
  FaSchool,
  FaHospital,
  FaMosque,
  FaBuilding,
  FaHandsHelping,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PartnershipSection = () => {
  const [canSlideNext, setCanSlideNext] = useState(true);
  const [canSlidePrev, setCanSlidePrev] = useState(false);

  const partners = [
    {
      title: 'Schools & Universities',
      icon: <FaSchool className="text-teal-600 text-3xl" />,
      desc: 'Host awareness drives, donor registrations & student volunteering.'
    },
    {
      title: 'Hospitals & Clinics',
      icon: <FaHospital className="text-red-500 text-3xl" />,
      desc: 'Partner for patient referrals, logistics, and treatment support.'
    },
    {
      title: 'Mosques & Faith Centers',
      icon: <FaMosque className="text-teal-600 text-3xl" />,
      desc: 'Promote life-saving causes during gatherings and sermons.'
    },
    {
      title: 'Corporates & Companies',
      icon: <FaBuilding className="text-red-600 text-3xl" />,
      desc: 'Enable CSR support through funding, employee volunteering & more.'
    },
    {
      title: 'NGOs & Foundations',
      icon: <FaHandsHelping className="text-teal-600 text-3xl" />,
      desc: 'Collaborate on outreach, patient aid, and healthcare access.'
    }
  ];

  const handleSlideChange = (swiper) => {
    setCanSlidePrev(!swiper.isBeginning);
    setCanSlideNext(!swiper.isEnd);
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
            <FaHandshake size={28} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Amplify your organization’s social impact by joining hands with HopeCell. Whether you’re a school, mosque, hospital, company, or NGO — there's a role for you in saving lives.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-partner',
            prevEl: '.swiper-button-prev-partner'
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.2 }
          }}
          onSlideChange={handleSlideChange}
          className="pb-16"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition h-48 relative">
                <div className="mb-4">{partner.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{partner.title}</h3>
                <p className="text-gray-600 text-sm">{partner.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-6 mt-4">
          <button
            className={`swiper-button-prev-partner flex items-center gap-2 p-2 rounded-full text-base transition ${
              canSlidePrev ? 'font-bold text-gray-900' : 'text-gray-400'
            }`}
          >
            <FaChevronLeft />
            <span>Prev</span>
          </button>

          <button
            className={`swiper-button-next-partner flex items-center gap-2 p-2 rounded-full text-base transition ${
              canSlideNext ? 'font-bold text-gray-900' : 'text-gray-400'
            }`}
          >
            <span>Next</span>
            <FaChevronRight />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-4">
          <a href='/partner-us' className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-md transition text-lg">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
