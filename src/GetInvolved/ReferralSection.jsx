import React, { useState } from 'react';
import { FaShareAlt, FaUserPlus, FaUsers, FaHeart, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const ReferralSection = () => {
 const referaContent=[
            {
              icon: <FaUserPlus className="text-red-600 text-2xl" />,
              title: 'More Donors',
              desc: 'Every person you invite increases the chance of finding a lifesaving match.'
            },
            {
              icon: <FaUsers className="text-red-600 text-2xl" />,
              title: 'Build the Registry',
              desc: 'Help us grow a diverse donor base for all ethnicities and communities.'
            },
            {
              icon: <FaHeart className="text-red-600 text-2xl" />,
              title: 'Make a Bigger Impact',
              desc: 'One referral could lead to a transplant — and save a life.'
            }
          ];
  const [showShareModal, setShowShareModal] = useState(false);
  
  const shareMessage = "Hey! I just joined HopeCell to become a stem cell donor. You should too: https://hopecell.org/register";
  
  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="text-green-500 text-2xl" />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`
    },
    {
      name: 'Telegram',
      icon: <FaTelegram className="text-blue-500 text-2xl" />,
      url: `https://t.me/share/url?url=${encodeURIComponent('https://hopecell.org/register')}&text=${encodeURIComponent('Hey! I just joined HopeCell to become a stem cell donor. You should too!')}`
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-gray-600 text-2xl" />,
      url: `mailto:?subject=Join HopeCell as a Stem Cell Donor&body=${encodeURIComponent(shareMessage)}`
    }
  ];

  const handleWebShare = async () => {
    try {
      await navigator.share({
        title: 'Join HopeCell',
        text: 'I just joined HopeCell to become a stem cell donor. You should too!',
        url: 'https://hopecell.org/register',
      });
    } catch (err) {
      console.log('Web Share API not supported', err);
      setShowShareModal(true);
    }
  };

  return (
    <section className="py-8 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Icon and Heading */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-teal-600 mb-4 shadow-md">
          <FaShareAlt size={26} />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Spread the Word, <span className="text-teal-600">Save More Lives</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
          Every referral helps us reach someone who could be the perfect match. Invite friends, family, or colleagues to register as stem cell donors.
        </p>

        {/* Why Refer */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto text-left">
          {referaContent.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-100 p-2 rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={handleWebShare}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-md text-lg transition"
        >
          Refer a Friend
        </button>

        {/* Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Share via</h3>
                <button 
                  onClick={() => setShowShareModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <MdClose size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {shareOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="mb-2">{option.icon}</div>
                    <span className="text-sm font-medium">{option.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-6">
                <div className="relative">
                  <input
                    type="text"
                    value={shareMessage}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md pr-10"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shareMessage);
                      alert('Link copied to clipboard!');
                    }}
                    className="absolute right-2 top-2 text-gray-500 hover:text-teal-600"
                    title="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReferralSection;