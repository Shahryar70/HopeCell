import React, { useState } from 'react';
import { FaUserPlus, FaBone, FaHandHoldingHeart, FaChevronRight } from 'react-icons/fa';

const DonorRegistration = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Choose Donation Type",
      options: [
        {
          icon: <FaBone className="text-red-600 text-2xl" />,
          title: "Bone Marrow Donor",
          description: "Join our registry to potentially save a life through stem cell donation"
        },
        {
          icon: <FaHandHoldingHeart className="text-red-600 text-2xl" />,
          title: "Financial Donor",
          description: "Support our mission with monetary contributions"
        },
        {
          icon: <FaUserPlus className="text-red-600 text-2xl" />,
          title: "Both",
          description: "Register as a donor and support financially"
        }
      ]
    },
    // Additional steps would go here (UI only for now)
  ];

  const handleOptionSelect = (option) => {
    // For now just advance to next step
    // In future, this would trigger appropriate registration flow
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      {/* Registration Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center"
      >
        JOIN DONOR REGISTRY <FaChevronRight className="ml-1" />
      </button>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                {steps[currentStep - 1].title}
              </h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4">
              {steps[currentStep - 1].options.map((option, index) => (
                <div 
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="border border-gray-200 rounded-lg p-4 hover:border-red-300 cursor-pointer transition-colors flex items-start"
                >
                  <div className="mr-3 mt-1">
                    {option.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{option.title}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Step indicator (for multi-step) */}
            {steps.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {steps.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-2 rounded-full ${currentStep === index + 1 ? 'bg-red-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DonorRegistration;