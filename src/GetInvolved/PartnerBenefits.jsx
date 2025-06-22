import React from 'react'
import { FaHandshake, FaUniversity, FaHospital, FaMosque, FaBuilding, FaUsers, FaFileUpload } from 'react-icons/fa'
const PartnerBenefits = () => {
  return (
    <div className="space-y-8">
     
      
      <div className="pt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Partner With Us?
        </h2>
        
        <div className="space-y-6">
          {[
            {
              icon: <FaUsers className="text-teal-600 text-2xl" />,
              title: "Expanded Outreach",
              desc: "Reach new audiences through our network"
            },
            {
              icon: <FaFileUpload className="text-blue-600 text-2xl" />,
              title: "Impact Reporting",
              desc: "Receive regular updates on lives impacted"
            },
            {
              icon: <FaHandshake className="text-red-600 text-2xl" />,
              title: "Collaboration",
              desc: "Work with our expert team"
            },
            {
              icon: <FaBuilding className="text-purple-600 text-2xl" />,
              title: "Visibility",
              desc: "Showcase your social responsibility"
            }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold ml-3">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerBenefits