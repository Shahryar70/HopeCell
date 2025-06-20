import {React, useState} from 'react';
import {
  FaHandHoldingHeart, FaPills, FaAmbulance, FaHospital,FaArrowRight,FaChevronLeft,FaChevronRight
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
const HopeWallet = () => {
         const [canSlideNext, setCanSlideNext] = useState(true);
        const [canSlidePrev, setCanSlidePrev] = useState(false);
    const resources = [
  {
    title: "Medicine Sponsorships",
    desc: "Provide monthly or emergency medication for patients undergoing chemotherapy or transplants.",
    icon: <FaPills className="text-teal-600 text-4xl" />
  },
  {
    title: "Emergency Transport",
    desc: "Cover ambulance or travel costs for rural patients reaching distant hospitals in time.",
    icon: <FaAmbulance className="text-red-600 text-4xl" />
  },
  {
    title: "Hospital Lodging",
    desc: "Support overnight stay for patient families near urban medical centers.",
    icon: <FaHospital className="text-teal-600 text-4xl" />
  },
  {
    title: "Post-Transplant Nutrition",
    desc: "Sponsor high-protein food kits vital for recovery during post-transplant phase.",
    icon: <FaHandHoldingHeart className="text-red-600 text-4xl" />
  },
  {
    title: "Diagnostic Testing",
    desc: "Fund essential lab work like blood counts and HLA matching tests for underprivileged patients.",
    icon: <FaPills className="text-purple-600 text-4xl" />
  },
  {
    title: "Psychosocial Counseling",
    desc: "Support therapy sessions for patients and families battling emotional trauma.",
    icon: <FaHandHoldingHeart className="text-blue-600 text-4xl" />
  },
  {
    title: "Follow-Up Care",
    desc: "Enable continuous care visits, medication refills, and secondary testing after treatment.",
    icon: <FaHospital className="text-red-600 text-4xl" />
  }
];

      const handleSlideChange = (swiper) => {
        setCanSlidePrev(!swiper.isBeginning);
        setCanSlideNext(!swiper.isEnd);
      };
  return (
    <>
        <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
         <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
            <FaHandHoldingHeart size={28} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hope Wallet: <span className="text-red-600">Fund a Life</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your donations go directly to urgent patient needs — medicine, transportation, and hospital stays. 100% impact. Zero overhead.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
                    onSlideChange={handleSlideChange}
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
              <div className="relative border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition h-64">
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
            <button
              className={`swiper-button-prev-custom flex items-center gap-2 p-2 rounded-full text-base transition ${
                canSlidePrev ? 'font-bold text-gray-900' : 'text-gray-400'
              }`}
            >
              <FaChevronLeft />
              <span>Prev</span>
            </button>
  
            <button
              className={`swiper-button-next-custom flex items-center gap-2 p-2 rounded-full text-base transition ${
                canSlideNext ? 'font-bold text-gray-900' : 'text-gray-400'
              }`}
            >
              <span>Next</span>
              <FaChevronRight />
            </button>
          </div>
      </div>
    </section>
</>
  );
};

export default HopeWallet;
