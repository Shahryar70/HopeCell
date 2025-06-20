import React from 'react';
import { FaUserFriends, FaBullhorn, FaUniversity, FaHashtag, FaWhatsapp } from 'react-icons/fa';

const VolunteerSection = () => {
  const activities = [
    {
      icon: <FaBullhorn className="text-red-600" size={24} />,
      title: 'Local Awareness Events',
      desc: 'Help organize or support city-wide blood cancer awareness activities.',
    },
    {
      icon: <FaUniversity className="text-red-600" size={24} />,
      title: 'Campus Donor Drives',
      desc: 'Coordinate student-led stem cell registration booths in universities.',
    },
    {
      icon: <FaHashtag className="text-teal-600" size={24} />,
      title: 'Social Media Outreach',
      desc: 'Spread life-saving stories and campaigns through your digital influence.',
    },
    {
      icon: <FaWhatsapp className="text-green-500" size={24} />,
      title: 'WhatsApp Matching Groups',
      desc: 'Assist in connecting potential donors to urgent patient cases.',
    },
  ];

  return (
    <section className="py-8 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
            <FaUserFriends size={28} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be a part of the change. Whether you're a student, a professional, or simply a caring soul — there’s a place for you in the HopeCell family.
          </p>
        </div>

        {/* Volunteer Roles Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {activities.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <a href='/volunteer-page' className="bg-red-600 cursor-pointer hover:bg-red-700 text-white text-lg font-semibold py-3 px-8 rounded-md shadow transition">
            Join the Volunteer Network
          </a>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
