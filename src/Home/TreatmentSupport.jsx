import React from 'react';
import { FaHandHoldingUsd, FaHospitalSymbol, FaUserNurse } from 'react-icons/fa';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const TreatmentSupport = () => {
  const resources = [
    {
      title: "Financial Aid",
      desc: "Grants for chemotherapy & transplants",
      icon: <FaHandHoldingUsd className="text-green-600 text-4xl" />
    },
    {
      title: "Hospital Partnerships",
      desc: "Priority access to top cancer centers",
      icon: <FaHospitalSymbol className="text-red-600 text-4xl" />
    },
    {
      title: "Caregiver Training",
      desc: "Free workshops for families",
      icon: <FaUserNurse className="text-blue-600 text-4xl" />
    },
    // Add more cards if needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900">Support our Mission</h2>
          <p className="text-gray-600 max-w-lg border-l-2 border-red-500 pl-4">
            Support DKMS in many ways and give hope to many cancer patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <div key={index} className="relative border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-10">{item.desc}</p>

              <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition">
                <BiRightArrow className="text-lg text-gray-800" />
              </button>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default TreatmentSupport;
