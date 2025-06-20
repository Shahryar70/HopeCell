import {React, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {
  FaHandHoldingHeart,
  FaUsers,
  FaUserInjured,
  FaShieldAlt,
  FaLightbulb
} from 'react-icons/fa';

const OurValues = () => {
  const values = [
    {
      icon: <FaHandHoldingHeart className="text-red-600" size={28} />,
      title: "Radical Compassion",
      description: "We treat every patient as family, with dignity and emotional support at each step."
    },
    {
      icon: <FaUsers className="text-teal-600" size={28} />,
      title: "Cultural Integrity",
      description: "Our solutions respect local traditions while meeting global medical standards."
    },
    {
      icon: <FaUserInjured className="text-black" size={28} />,
      title: "Patient Sovereignty",
      description: "Patients guide their care journey—we're facilitators, not decision-makers."
    },
    {
      icon: <FaShieldAlt className="text-red-600" size={28} />,
      title: "Transparent Operations",
      description: "Full financial and operational disclosure to donors and beneficiaries."
    },
    {
      icon: <FaLightbulb className="text-teal-600" size={28} />,
      title: "Frugal Innovation",
      description: "Maximizing impact through low-cost, high-efficiency medical solutions."
    }
  ];
 const [swiperRef, setSwiperRef] = useState(null);
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);

  const updateNavState = (swiper) => {
    setCanSlidePrev(swiper.isBeginning === false);
    setCanSlideNext(swiper.isEnd === false);
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our <span className="text-red-600">Core Values</span>
          </h2>
          <p className="text-gray-600 max-w-lg border-l-2 border-red-500 pl-4">
            Principles that shape every decision at HopeCell
          </p>
        </div>

        {/* Swiper Slider */}
       <Swiper
          modules={[Pagination, Navigation]}
          onSwiper={(swiper) => setSwiperRef(swiper)}
          onSlideChange={(swiper) => updateNavState(swiper)}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-values',
            prevEl: '.swiper-button-prev-values'
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-16"
        >
          {values.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border rounded-xl p-6 h-full shadow-sm hover:shadow-md transition border-t-4 border-teal-600">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-6 mt-4">
          <button
            className={`swiper-button-prev-values flex items-center gap-2 p-2 rounded-full text-base transition ${
              canSlidePrev ? 'font-bold text-gray-900' : 'text-gray-400'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Prev</span>
          </button>

          <button
            className={`swiper-button-next-values flex items-center gap-2 p-2 rounded-full text-base transition ${
              canSlideNext ? 'font-bold text-gray-900' : 'text-gray-400'
            }`}
          >
            <span>Next</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
