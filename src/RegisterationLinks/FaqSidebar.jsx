import React from 'react';
import { FaQuestionCircle, FaInfoCircle, FaChevronRight } from 'react-icons/fa';

export const FaqSidebar = ({ showFaq, setShowFaq }) => {
  const faqs = [
    {
      question: "Why is age important for donation?",
      answer: "Donors must be between 18-60 years old to ensure safety for both donor and recipient."
    },
    {
      question: "What health conditions would disqualify me?",
      answer: "Conditions like HIV, hepatitis, or certain cancers may disqualify you. We'll review your health history confidentially."
    },
    {
      question: "How does the donation process work?",
      answer: "Most donations are non-surgical (like blood donation). Only 10% require a minor surgical procedure under anesthesia."
    },
    {
      question: "Is there any cost to me?",
      answer: "No, all medical costs are covered by HopeCell or the patient's insurance. Travel expenses may also be reimbursed."
    }
  ];

  return (
    <div className={`lg:w-80 transition-all duration-300 ${showFaq ? 'block' : 'hidden lg:block'}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
        <div 
          className="bg-red-600 text-white p-4 flex justify-between items-center cursor-pointer lg:cursor-auto"
          onClick={() => setShowFaq(!showFaq)}
        >
          <h2 className="text-lg font-semibold flex items-center">
            <FaQuestionCircle className="mr-2" /> Donation FAQs
          </h2>
          <FaChevronRight className={`lg:hidden transition-transform ${showFaq ? 'rotate-90' : ''}`} />
        </div>
        
        <div className="p-4 divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-3">
              <h3 className="font-medium text-gray-900 flex items-center">
                <FaInfoCircle className="text-red-500 mr-2 text-sm" /> {faq.question}
              </h3>
              <p className="text-sm text-gray-600 mt-1 pl-6">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">Need help?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Our team is available to answer your questions about donation.
          </p>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};