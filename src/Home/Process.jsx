import {React, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { BiUserPlus, BiTestTube, BiDna, BiHeart, BiCalendarCheck } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Process = () => {
   const [canSlideNext, setCanSlideNext] = useState(true);
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const steps = [
    {
      icon: <BiUserPlus className="text-white" size={32} />,
      title: "Register",
      desc: "Join our donor database in 2 minutes",
      bgImage: "url('/Assets/Images/Home/Process1.png')"
    },
    {
      icon: <BiTestTube className="text-white" size={32} />,
      title: "Get Tested",
      desc: "Free HLA typing kit mailed to you",
      bgImage: "url('/Assets/Images/Home/Process2.png')"
    },
 
    {
      icon: <BiHeart className="text-white" size={32} />,
      title: "Donate",
      desc: "Save a life through your gift",
      bgImage: "url('/Assets/Images/Home/Process3.png')"
    },
       {
      icon: <BiDna className="text-white" size={32} />,
      title: "Get Matched",
      desc: "We notify you when compatible",
      bgImage: "url('/Assets/Images/Home/Process4.png')"
    },
    {
      icon: <BiCalendarCheck className="text-white" size={32} />,
      title: "Follow Up",
      desc: "See your impact on patients",
      bgImage: "url('/Assets/Images/Home/Process5.png')"
    }
  ];
  const handleSlideChange = (swiper) => {
    setCanSlidePrev(!swiper.isBeginning);
    setCanSlideNext(!swiper.isEnd);
  };

  return (
    <section className="py-8 bg-white">
     
      <h2 className="text-4xl font-extrabold text-center mb-4">How <span className='text-red-600'>HopeCell</span> Works</h2>
      <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
        From registration to life-saving donation - your journey matters
      </p>

      <div className="px-4">
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
            640: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.5 }
          }}
          className="pb-16"
        >
          {steps.map((step, i) => (
            <SwiperSlide key={i} className="h-full">
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden flex flex-col">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: step.bgImage }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full text-white mt-auto">
                  <span className="text-5xl mb-4">{step.icon}</span>

                  {/* This entire content block is pushed to bottom using mt-auto */}
                  <div className="flex flex-col mt-auto">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2">{step.desc}</p>

                    {i === steps.length - 1 && (
                      <a className="w-3/4 md:w-2/4 lg:w-2/4 mt-2 inline-flex items-center px-4 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium shadow-sm transition-colors">
                        Start Registration
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
  );
};

export default Process;
