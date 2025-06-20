import React from 'react';
import { FaShareAlt, FaUserPlus, FaUsers, FaHeart } from 'react-icons/fa';

const ReferralSection = () => {
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
          {[
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
          ].map((item, i) => (
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
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-md text-lg transition">
          Refer a Friend
        </button>
      </div>
    </section>
  );
};

export default ReferralSection;
