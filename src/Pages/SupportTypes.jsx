import {React, useState} from 'react'
import { FaPills, FaUsers,FaAmbulance,FaHotel, FaWallet, FaPhone,
     FaHandHoldingHeart,FaSearch,FaChevronLeft,FaChevronRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const SupportTypes = () => {
 const supportTypes = [
    {
      icon: <FaUsers className="text-3xl text-red-600" />,
      title: "Stem Cell Donor Matching",
      description: "Connecting patients with potential stem cell donors worldwide"
    },
    {
      icon: <FaPills className="text-3xl text-blue-600" />,
      title: "Medical & Medicine Aid",
      description: "Assistance with medications and medical supplies"
    },
    {
      icon: <FaAmbulance className="text-3xl text-green-600" />,
      title: "Transportation Help",
      description: "Rides to treatment centers and medical appointments"
    },
    {
      icon: <FaHotel className="text-3xl text-purple-600" />,
      title: "Hospital Lodging",
      description: "Affordable accommodations near treatment centers"
    },
    {
      icon: <FaWallet className="text-3xl text-yellow-600" />,
      title: "Hope Wallet Financial Support",
      description: "Grants to help with treatment costs and living expenses"
    },
    {
      icon: <FaPhone className="text-3xl text-pink-600" />,
      title: "24/7 Patient Hotline",
      description: "Always available for questions and urgent needs"
    },
    {
      icon: <FaHandHoldingHeart className="text-3xl text-teal-600" />,
      title: "Counseling & Emotional Support",
      description: "Professional counseling for patients and families"
    },
    {
      icon: <FaSearch className="text-3xl text-orange-600" />,
      title: "Clinical Trial Navigation",
      description: "Help finding and enrolling in relevant clinical trials"
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
   <section className='py-20 bg-gray-50'>
    <div className='max-w-6xl mx-auto px-4'>
 <div className='flex justify-between items-center mb-8 flex-col md:flex-row gap-4'>
<h2 className='text-4xl font-extrabold  text-gray-900'>
Our Support Services</h2>
<p className='text-base'></p>
 </div>
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
{supportTypes.map((supportType, index) => (
<SwiperSlide key={index}>
    <div className="bg-white border rounded-xl p-6 h-40 shadow-sm hover:shadow-md transition border-t-4 border-teal-600">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                    {supportType.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{supportType.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{supportType.description}</p>
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
                <FaChevronLeft />
            <span>Prev</span>
          </button>

          <button
            className={`swiper-button-next-values flex items-center gap-2 p-2 rounded-full text-base transition ${
              canSlideNext ? 'font-bold text-gray-900' : 'text-gray-400'
            }`}
          >
            <span>Next</span>
                   <FaChevronRight />
       
          </button>
        </div>
    </div>
   </section>
  )
}

export default SupportTypes