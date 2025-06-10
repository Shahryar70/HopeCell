import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UrgentNeeds = () => {
  const urgentCases = [
    {
      id: 1,
      type: "AB+ Blood Donor",
      patient: "8yr old with Leukemia",
      location: "Bait-ul-Sukoon Cancer Hospital",
      deadline: "48 HOURS",
      priority: "Critical"
    },
    {
      id: 2,
      type: "Bone Marrow Match",
      patient: "22yr old female",
      location: "Shaukat Khanum Memorial Cancer Hospital ",
      deadline: "1 WEEK",
      priority: "High"
    },
    {
      id: 3,
      type: "Platelet Donor (A-)",
      patient: "45yr old male",
      location: "Ziauddin Cancer Hospital",
      deadline: "3 DAYS",
      priority: "Urgent"
    },
    {
      id: 4,
      type: "Financial Support",
      patient: "Child's chemotherapy",
      amount: "85,000 Rs",
      location: "The Cancer Foundation Hospital",
      deadline: "Ongoing"
    },
    {
      id: 5,
      type: "Financial Support",
      patient: "Child's chemotherapy",
      amount: "85,000 Rs",
      location: "Islambad",
      deadline: "Ongoing"
    }
  ];

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
        <h2 className="text-4xl font-extrabold text-center mb-4">Urgent Cases Needing Help</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Real patients who need support today
        </p>

        {/* Swiper Carousel for All Screens */}
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
          {/* Prev */}
          <button className="swiper-button-prev-custom flex items-center gap-2 p-2 rounded-full hover:text-gray-900 text-sm text-gray-700">
            <FaChevronLeft />
            <span>Prev</span>
          </button>

          {/* Next */}
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
