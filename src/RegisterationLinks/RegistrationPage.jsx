import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft, FaCheck, FaGlobeAmericas, FaHeartbeat, FaUserMd, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaVenusMars, FaIdCard } from 'react-icons/fa';
import { FaqSidebar } from './FaqSidebar';
import { registerDonor } from '../services/apiService';
export const RegistrationPage = () => {
const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFaq, setShowFaq] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const questions = [
    {
      id: 'personal',
      question: "Let's start with your basic information",
      type: 'personal',
      fields: [
        {
          id: 'fullName',
          label: "Full Name",
          type: 'text',
          required: true,
          icon: <FaUser className="text-red-500 mr-2" />
        },
        {
          id: 'email',
          label: "Email Address",
          type: 'email',
          required: true,
          icon: <FaEnvelope className="text-red-500 mr-2" />
        },
        {
          id: 'phone',
          label: "Phone Number",
          type: 'tel',
          required: true,
          icon: <FaPhone className="text-red-500 mr-2" />
        }
      ]
    },
    {
      id: 'demographics',
      question: "Tell us about yourself",
      type: 'demographics',
      fields: [
        {
          id: 'gender',
          label: "Gender",
          type: 'select',
          options: ["Male", "Female", "Non-binary", "Prefer not to say"],
          required: true,
          icon: <FaVenusMars className="text-red-500 mr-2" />
        },
        {
          id: 'age',
          label: "Age",
          type: 'age',
          min: 18,
          max: 60,
          required: true,
          icon: <FaHeartbeat className="text-red-500 mr-2" />
        },
        {
          id: 'ethnicity',
          label: "Ethnicity",
          type: 'select',
          options: [
            "White/Caucasian",
            "Black/African American",
            "Hispanic/Latino",
            "Asian",
            "Native American",
            "Pacific Islander",
            "Mixed Race",
            "Other"
          ],
          required: false,
          icon: <FaUser className="text-red-500 mr-2" />
        }
      ]
    },
    {
      id: 'address',
      question: "Where do you live?",
      description: "This helps us match you with patients in your region",
      type: 'address',
      fields: [
        {
          id: 'street',
          label: "Street Address",
          type: 'text',
          required: true,
          icon: <FaMapMarkerAlt className="text-red-500 mr-2" />
        },
        {
          id: 'city',
          label: "City",
          type: 'text',
          required: true,
          icon: <FaMapMarkerAlt className="text-red-500 mr-2" />
        },
        {
          id: 'state',
          label: "State/Province",
          type: 'text',
          required: true,
          icon: <FaMapMarkerAlt className="text-red-500 mr-2" />
        },
        {
          id: 'zip',
          label: "ZIP/Postal Code",
          type: 'text',
          required: true,
          icon: <FaMapMarkerAlt className="text-red-500 mr-2" />
        },
        {
          id: 'country',
          label: "Country",
          type: 'select',
          options: [
            "Pakistan",
            "United States",
            "Canada",
            "United Kingdom",
            "India",
            "Australia",
            "Other"
          ],
          required: true,
          icon: <FaGlobeAmericas className="text-red-500 mr-2" />
        }
      ]
    },
    {
      id: 'health',
      question: "Health Information",
      description: "This confidential information helps determine eligibility",
      type: 'health',
      fields: [
        {
          id: 'healthConditions',
          label: "Do you have any chronic health conditions?",
          type: 'radio',
          options: ["Yes", "No", "I'm not sure"],
          required: true,
          icon: <FaUserMd className="text-red-500 mr-2" />
        },
        {
          id: 'bloodType',
          label: "Do you know your blood type? (Optional)",
          type: 'select',
          options: [
            "I don't know",
            "A+",
            "A-",
            "B+",
            "B-",
            "AB+",
            "AB-",
            "O+",
            "O-"
          ],
          required: false,
          icon: <FaHeartbeat className="text-red-500 mr-2" />
        }
      ]
    },
    {
      id: 'commitment',
      question: "Final Questions",
      type: 'commitment',
      fields: [
        {
          id: 'willingness',
          label: "Are you willing to donate to any patient in need?",
          type: 'radio',
          options: ["Yes, absolutely", "I'd prefer to choose", "I'm not sure yet"],
          required: true,
          description: "Bone marrow donors must be willing to donate to any patient who matches their tissue type",
          icon: <FaHeartbeat className="text-red-500 mr-2" />
        },
        {
          id: 'idVerification',
          label: "I agree to provide government-issued ID when requested",
          type: 'checkbox',
          required: true,
          icon: <FaIdCard className="text-red-500 mr-2" />
        }
      ]
    }
  ];

  const handleAnswer = (fieldId, value, questionId = null) => {
    const targetQuestionId = questionId || questions[currentStep].id;
    setAnswers(prev => ({
      ...prev,
      [targetQuestionId]: {
        ...prev[targetQuestionId],
        [fieldId]: value
      }
    }));

    // Auto-advance single-field questions
    if (questions[currentStep].fields.length === 1 && currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 500);
    }
  };

  const handleFieldChange = (e, field) => {
    const value = field.type === 'checkbox' ? e.target.checked : e.target.value;
    handleAnswer(field.id, value);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  const allFieldsAnswered = () => {
    const currentQuestion = questions[currentStep];
    return currentQuestion.fields.every(field => {
      if (!field.required) return true;
      return answers[currentQuestion.id]?.[field.id] !== undefined && 
             answers[currentQuestion.id]?.[field.id] !== '';
    });
  };
  const handleCompleteRegistration = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare the data for submission
      const donorData = {
        FullName: answers.personal?.fullName,
        Email: answers.personal?.email,
        PhoneNumber: answers.personal?.phone,
        Gender: answers.demographics?.gender,
        Age: answers.demographics?.age,
        Ethnicity: answers.demographics?.ethnicity,
        StreetAddress: answers.address?.street,
        City: answers.address?.city,
        StateProvince: answers.address?.state,
        ZipPostalCode: answers.address?.zip,
        Country: answers.address?.country,
        HasHealthConditions: answers.health?.healthConditions === "Yes",
        HealthConditionsDetails: answers.health?.healthConditions === "Yes" ? "User reported health conditions" : null,
        BloodType: answers.health?.bloodType === "I don't know" ? null : answers.health?.bloodType,
        WillingnessToDonate: answers.commitment?.willingness,
        AgreedToIdVerification: answers.commitment?.idVerification || false
      };

      console.log('Submitting donor data:', donorData);
      
      // Call the API service
      const response = await registerDonor(donorData);
      console.log('Registration successful:', response);
      
      // Redirect to success page
      navigate('/registration-success');
    } catch (err) {
      console.error('Registration error:', err);
      
      // Handle specific error cases
      let errorMessage = 'Registration failed. Please try again.';
      if (err.message.includes('Email address')) {
        errorMessage = err.message;
      } else if (err.message.includes('failed with status 500')) {
        errorMessage = 'Server error. Please try again later.';
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-red-600">
              Step {currentStep + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {Math.round(progress)}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-red-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Questionnaire */}
          <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Become a Lifesaving Donor
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {currentStep === 0 ? "We just need some basic information to get started" : 
                 "Please provide the following details to complete your registration"}
              </p>

              {/* Current Question */}
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <div className="flex items-start">
                    {questions[currentStep].icon || <FaUser className="text-red-500 mr-2" />}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {questions[currentStep].question}
                      </h3>
                      {questions[currentStep].description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {questions[currentStep].description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Answer Input */}
                <div className="mt-4 space-y-6">
                  {questions[currentStep].fields.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        <div className="flex items-center">
                          {field.icon}
                          {field.label}
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </div>
                      </label>

                      {field.type === 'text' || field.type === 'email' || field.type === 'tel' ? (
                        <input
                          type={field.type}
                          value={answers[questions[currentStep].id]?.[field.id] || ''}
                          onChange={(e) => handleFieldChange(e, field)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          required={field.required}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          value={answers[questions[currentStep].id]?.[field.id] || ''}
                          onChange={(e) => handleFieldChange(e, field)}
                          className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white bg-no-repeat bg-[right_1rem_center] bg-[length:1.5rem] pr-12 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          required={field.required}
                        >
                          <option value="" disabled>Select {field.label.toLowerCase()}</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : field.type === 'age' ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-5 gap-2">
                            {Array.from(
                              { length: field.max - field.min + 1 },
                              (_, i) => field.min + i
                            ).map((age) => (
                              <button
                                key={age}
                                type="button"
                                onClick={() => handleAnswer(field.id, age, questions[currentStep].id)}
                                className={`py-3 px-2 rounded-lg border transition-all ${answers[questions[currentStep].id]?.[field.id] === age 
                                  ? 'border-red-500 bg-red-50 text-red-700 font-medium' 
                                  : 'border-gray-200 hover:border-red-300'}`}
                              >
                                {age}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between text-sm text-gray-500 px-2">
                            <span>{field.min} years</span>
                            <span className="text-red-600 font-medium">
                              {answers[questions[currentStep].id]?.[field.id] 
                                ? `${answers[questions[currentStep].id][field.id]} selected` 
                                : "Select your age"}
                            </span>
                            <span>{field.max} years</span>
                          </div>
                        </div>
                      ) : field.type === 'radio' ? (
                        <div className="space-y-3">
                          {field.options.map((option, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleAnswer(field.id, option, questions[currentStep].id)}
                              className={`w-full text-left p-4 rounded-lg border transition-all flex items-center ${answers[questions[currentStep].id]?.[field.id] === option 
                                ? 'border-red-500 bg-red-50 text-red-700' 
                                : 'border-gray-200 hover:border-red-300'}`}
                            >
                              <span className={`inline-flex items-center justify-center w-5 h-5 mr-3 rounded-full border ${answers[questions[currentStep].id]?.[field.id] === option ? 'border-red-500 bg-red-500' : 'border-gray-300'}`}>
                                {answers[questions[currentStep].id]?.[field.id] === option && <FaCheck className="text-white text-xs" />}
                              </span>
                              {option}
                            </button>
                          ))}
                        </div>
                      ) : field.type === 'checkbox' ? (
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={field.id}
                              name={field.id}
                              type="checkbox"
                              checked={answers[questions[currentStep].id]?.[field.id] || false}
                              onChange={(e) => handleFieldChange(e, field)}
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                              required={field.required}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={field.id} className="font-medium text-gray-700">
                              {field.label}
                            </label>
                          </div>
                        </div>
                      ) : null}

                      {field.description && (
                        <p className="text-xs text-gray-500 mt-1">{field.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                  disabled={currentStep === 0}
                  className={`flex items-center px-4 py-2 rounded-lg ${currentStep === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <FaChevronLeft className="mr-1" /> Previous
                </button>
                
                {currentStep < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    disabled={!allFieldsAnswered()}
                    className={`flex items-center px-4 py-2 rounded-lg ${!allFieldsAnswered() ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white'}`}
                  >
                    Next <FaChevronRight className="ml-1" />
                  </button>
                ) : (
                <button
    type="button"
    onClick={handleCompleteRegistration}
    disabled={!allFieldsAnswered() || isSubmitting}
    className={`flex items-center px-6 py-3 rounded-lg font-medium ${!allFieldsAnswered() || isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`}
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
      <>
        Complete Registration <FaChevronRight className="ml-1" />
      </>
    )}
  </button>


                )}
              </div>
            </div>
          </div>

          {/* FAQ Sidebar Component */}
          <FaqSidebar showFaq={showFaq} setShowFaq={setShowFaq} />
        </div>
      </div>
    </div>
  );
};