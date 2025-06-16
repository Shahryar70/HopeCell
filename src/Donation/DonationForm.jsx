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
  handleSubmit,
  isSubmitting
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
            disabled={isSubmitting}
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
            disabled={!formData.name || !formData.email || !formData.phone || isSubmitting}
            className={`flex items-center px-6 py-2 rounded-lg ${
              !formData.name || !formData.email || !formData.phone || isSubmitting
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
            disabled={!formData.amount || isSubmitting}
            className={`flex items-center px-6 py-3 rounded-lg font-medium ${
              !formData.amount || isSubmitting
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-teal-600 hover:bg-teal-700 text-white'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Complete Donation'
            )}
          </button>
        )}
      </div>
    </div>
  );
};
export default DonationForm;