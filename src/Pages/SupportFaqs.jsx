import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SupportFaqs = () => {
const faqs = [
  {
    question: 'Who is eligible for support from HopeCell?',
    answer:
      'Anyone diagnosed with a blood disorder or blood cancer and undergoing treatment may be eligible. We assess each case based on medical and financial need.'
  },
  {
    question: 'What types of support can I receive?',
    answer:
      'Support may include financial aid, transportation to treatment centers, medication assistance, temporary housing near hospitals, and emotional counseling.'
  },
  {
    question: 'Is my personal and medical information kept confidential?',
    answer:
      'Absolutely. All submitted information is handled with the highest level of confidentiality and stored securely.'
  },
  {
    question: 'How long does it take to process my support request?',
    answer:
      'Once your complete application and documents are submitted, our team usually reviews and responds within 5–7 business days.'
  },
  {
    question: 'Do I need a doctor’s recommendation to apply?',
    answer:
      'Yes, providing your treating physician’s contact details and medical documentation is essential to verify eligibility.'
  },
  {
    question: 'Can I apply for multiple types of support?',
    answer:
      'Yes, you can indicate all areas where you need help in the application form. Our team will assess your request holistically.'
  },
  {
    question: 'I’m not sure what documents to upload. What should I do?',
    answer:
      'We typically require a diagnosis confirmation, treatment plan, and recent lab reports. If you\'re unsure, contact our support team for guidance.'
  },
  {
    question: 'Can someone help me fill out the application?',
    answer:
      'Yes. Our patient advocates are available to guide you step-by-step. Call us at 1-800-HOPE-CELL.'
  },
  {
    question: 'Is there a deadline to apply for assistance?',
    answer:
      'There’s no strict deadline, but applying early ensures quicker access to available resources.'
  },
  {
    question: 'What happens after I submit my application?',
    answer:
      'You’ll receive a confirmation email. Our support team will then review your case and reach out with next steps.'
  }
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-3xl  text-center font-bold text-gray-900 mb-4">
            Frequently Asked <span className='text-red-600'>Questions</span>
          </h2>
          <p className="text-gray-600 text-base text-center">
Answers to common questions about stem cell donation and our support services.          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className={`ml-4 transition-transform ${openIndex === index ? 'rotate-180 text-red-600' : 'text-gray-500'}`}>
                  <FaChevronDown />
                </span>
              </button>
              
              {openIndex === index && (
                <div className="mt-2 text-gray-600 pr-8">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportFaqs;