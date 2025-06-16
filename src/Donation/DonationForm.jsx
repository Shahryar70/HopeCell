import React from 'react';
import PersonalInfoStep from './PersonalInfoStep';
import PaymentStep from './PaymentStep';

const DonationForm = ({ 
  currentStep, 
  formData, 
  handleChange, 
  setFormData,
  nextStep,
  prevStep,
  handleSubmit 
}) => {
  return (
    <div className="space-y-6">
      {currentStep === 1 && (
        <PersonalInfoStep 
          formData={formData} 
          handleChange={handleChange} 
        />
      )}

      {currentStep === 2 && (
        <PaymentStep 
          formData={formData} 
          handleChange={handleChange}
          setFormData={setFormData}
        />
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Back
          </button>
        ) : (
          <div></div>
        )}

        {currentStep < 2 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!formData.name || !formData.email || !formData.phone}
            className={`flex items-center px-6 py-2 rounded-lg ${
              !formData.name || !formData.email || !formData.phone 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-teal-600 hover:bg-teal-700 text-white'
            }`}
          >
            Continue to Payment
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!formData.amount}
            className={`flex items-center px-6 py-3 rounded-lg font-medium ${
              !formData.amount 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-teal-600 hover:bg-teal-700 text-white'
            }`}
          >
            Complete Donation
          </button>
        )}
      </div>
    </div>
  );
};

export default DonationForm;