import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaArrowRight } from 'react-icons/fa';

const RequestSupport = () => {
  const navigate = useNavigate();
  const [needs, setNeeds] = useState({
    financial: false,
    transportation: false,
    emotional: false,
    medication: false,
    housing: false,
    other: false,
    otherText: ''
  });

  const [showEligibility, setShowEligibility] = useState(false);
  const [isEligible, setIsEligible] = useState(null);

  const handleNeedChange = (e) => {
    const { name, checked } = e.target;
    setNeeds(prev => ({ ...prev, [name]: checked }));
  };

  const handleOtherTextChange = (e) => {
    setNeeds(prev => ({ ...prev, otherText: e.target.value }));
  };

  const checkEligibility = () => {
    const hasSelectedNeed = Object.values(needs).some(val => val === true);
    setIsEligible(hasSelectedNeed);
    setShowEligibility(true);
  };

  const proceedToApplication = () => {
    // Convert needs to URL query params
    const queryParams = Object.entries(needs)
      .filter(([_, value]) => value)
      .map(([key, value]) => {
        if (key === 'other') return `${key}=${encodeURIComponent(needs.otherText)}`;
        return key;
      })
      .join('&');
    
    navigate(`/get-support/application?${queryParams}`);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">What Type of Support Do You Need?</h1>
          <p className="text-lg text-gray-600">
            Select all that apply to help us understand how we can assist you.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { id: 'financial', label: 'Financial assistance' },
              { id: 'transportation', label: 'Transportation to treatment' },
              { id: 'emotional', label: 'Emotional support' },
              { id: 'medication', label: 'Medication assistance' },
              { id: 'housing', label: 'Housing near hospital' },
              { id: 'other', label: 'Other (please specify)' }
            ].map((item) => (
              <div key={item.id} className="flex items-start p-3 bg-white rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.id}
                  checked={needs[item.id]}
                  onChange={handleNeedChange}
                  className="h-5 w-5 text-red-600 rounded border-gray-300 focus:ring-red-500 mr-3 mt-1"
                />
                <label htmlFor={item.id} className="text-gray-700">
                  {item.label}
                  {item.id === 'other' && needs.other && (
                    <input
                      type="text"
                      value={needs.otherText}
                      onChange={handleOtherTextChange}
                      placeholder="Please describe"
                      className="ml-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2 border"
                    />
                  )}
                </label>
              </div>
            ))}
          </div>

          {!showEligibility ? (
            <button
              onClick={checkEligibility}
              disabled={!Object.values(needs).some(val => val === true)}
              className={`w-full py-3 px-4 rounded-md font-medium ${Object.values(needs).some(val => val === true) ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              Check Eligibility
            </button>
          ) : (
            <div className={`p-4 rounded-lg ${isEligible ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
              <h4 className="font-semibold mb-2">
                {isEligible ? (
                  <span className="text-green-700">✓ You may be eligible for support</span>
                ) : (
                  <span className="text-yellow-700">Please select at least one need</span>
                )}
              </h4>
              <p className="text-sm mb-4">
                {isEligible ? (
                  "Based on your selections, you may qualify for assistance. Please complete our application to continue."
                ) : (
                  "To determine your eligibility, please select at least one area where you need support."
                )}
              </p>
              {isEligible && (
                <button
                  onClick={proceedToApplication}
                  className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md flex items-center justify-center"
                >
                  Continue to Application <FaArrowRight className="ml-2" />
                </button>
              )}
            </div>
          )}
        </div>

        <div className="text-center border-t pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help Selecting?</h3>
          <p className="text-gray-600 mb-4">
            Our patient advocates can guide you through the options.
          </p>
          <a href="tel:18004673235" className="inline-flex items-center text-red-600 font-medium hover:underline">
            <FaPhone className="mr-2" /> Call: 1-800-HOPE-CELL
          </a>
        </div>
      </div>
    </div>
  );
};

export default RequestSupport;