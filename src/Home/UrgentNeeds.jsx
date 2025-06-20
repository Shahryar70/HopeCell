import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UrgentNeeds = () => {
  const [urgentCases, setUrgentCases] = useState([]);
   const apiUrl = process.env.REACT_APP_API_URL;
useEffect(() => {
  const fetchCases = async () => {
  try{
    const response = await fetch(`${apiUrl}/api/UrgentCases`);
    const data = await response.json();
    setUrgentCases(data);
  } catch (err) {
  console.error("Failed to fetch urgent cases: ", err)
  }
  };
  fetchCases();
},[])

 const renderCaseCard = (caseItem) => (
    <div key={caseItem.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-red-100 h-56">
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start">
          <span className="font-bold text-lg">{caseItem.type}</span>
          <span className={`px-2 py-1 text-xs rounded-full ${
            caseItem.priority === 'Critical' ? 'bg-red-100 text-red-800' :
            caseItem.priority === 'High' ? 'bg-orange-100 text-orange-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {caseItem.priority || 'Urgent'}
          </span>
        </div>

        {/* Body */}
        <div className="mt-4 space-y-2 flex-1">
          <p className="text-sm"><span className="font-medium">Patient:</span> {caseItem.patient}</p>
          <p className="text-sm"><span className="font-medium">Location:</span> {caseItem.location}</p>
          {caseItem.amount && (
            <p className="text-sm"><span className="font-medium">Amount Needed:</span> {caseItem.amount}</p>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-auto border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm font-medium">{caseItem.deadline}</span>
          <button className="btn btn-sm bg-red-600 text-white">Help Now</button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-8 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4"><span className='text-red-600'>Urgent Cases</span> Needing Help</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Real patients who need support today
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom'
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 }
          }}
          className="pb-16"
        >
          {urgentCases.map((caseItem) => (
            <SwiperSlide key={caseItem.id}>
              {renderCaseCard(caseItem)}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
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

export default UrgentNeeds;