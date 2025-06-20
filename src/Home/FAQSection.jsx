import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Who can register as a stem cell donor?',
      answer: 'Anyone aged 18–45 in good health can join our registry, regardless of gender or ethnicity.'
    },
    {
      question: 'Does stem cell donation hurt?',
      answer: 'In most cases, it feels like donating blood. We use modern, non-surgical methods called PBSC (Peripheral Blood Stem Cell Collection).'
    },
    {
      question: 'Is registration really free?',
      answer: 'Yes. HopeCell covers the cost of your swab kit, processing, and data management — entirely free for donors.'
    },
    {
      question: 'What if I match a patient?',
      answer: 'You’ll be contacted confidentially. After medical clearance, donation is scheduled. You can opt out at any point.'
    },
    {
      question: 'How does HopeCell support patients?',
      answer: 'We offer financial aid, transport support, donor search help, and emotional support through our Hope Wallet system.'
    },
    {
      question: 'How is my data kept secure?',
      answer: 'All your personal and medical data is encrypted, stored securely, and never shared without your consent.'
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
            Answers to common questions about stem cell donation and our support services.
          </p>
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

export default FAQSection;