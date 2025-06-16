// pages/DonationPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationForm from './DonationForm';

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    city: '',
    country: 'Pakistan',
    comment: '',
    specialAppeal: '',
    amount: '',
    paymentMethod: 'credit_card',
    anonymous: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
    navigate('/donation-success');
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-teal-600">
              Step {currentStep} of 2
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-teal-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${(currentStep / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Support Cancer Patients
              </h1>
              <p className="text-lg text-gray-600">
                {currentStep === 1 
                  ? "Your donation can bring hope to those fighting cancer"
                  : "Complete your donation to make a difference"}
              </p>
            </div>

            <DonationForm
              currentStep={currentStep}
              formData={formData}
              handleChange={handleChange}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;