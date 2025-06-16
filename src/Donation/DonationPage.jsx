// pages/DonationPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationForm from './DonationForm';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  try {
    const donationData = {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Gender: formData.gender,
      Address: formData.address,
      City: formData.city,
      Country: formData.country || "Pakistan",
      Comment: formData.comment,
      SpecialAppeal: formData.specialAppeal,
      Amount: parseFloat(formData.amount),
      PaymentMethod: formData.paymentMethod,
      IsAnonymous: formData.anonymous
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to save donation');
    }

    // Directly navigate to success page since we're not processing payments
    navigate('/donation-success', { 
      state: { 
        donation: formData,
        message: "Thank you for your donation pledge! We'll contact you for payment details."
      } 
    });
  } catch (err) {
    setError(err.message);
    console.error('Donation failed:', err);
  } finally {
    setIsSubmitting(false);
  }
};

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

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
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DonationPage;