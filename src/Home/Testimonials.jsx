import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const Stories = [
  {
    quote: "HopeCell found my perfect bone marrow match when time was running out",
    name: "Sam Jordan",
    role: "Leukemia Survivor",
    image: "/Assets/Images/Home/testimonial-1.jpg"
  },
     {
      quote: "The donor HopeCell matched me with saved my daughter's life. We'll be forever grateful.",
      name: "Sydney Taylor",
      role: "Mother of a Survivor",
      image: "/Assets/Images/Home/testimonial-2.jpg"
    },

  
    ];
  return (
<section className="py-12 bg-teal-50">
      <h2 className="text-4xl font-extrabold text-center mb-2">Voices of Hope</h2>
      <p className="text-center mb-12">Real stories from our community</p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
      >
        {Stories.map((story, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
              <FaQuoteLeft className="text-teal-500 text-4xl mb-4" />
              <p className="text-lg italic">"{story.quote}"</p>
              <div className="mt-6 flex items-center">
                <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">{story.name}</h4>
                  <p className="text-sm text-gray-600">{story.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials