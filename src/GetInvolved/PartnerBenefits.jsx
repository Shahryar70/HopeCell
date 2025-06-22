import React from 'react'
import { FaHandshake, FaUniversity, FaHospital, FaMosque, FaBuilding, FaUsers, FaFileUpload } from 'react-icons/fa'
const PartnerBenefits = () => {
  const content=[
  {
    icon: <FaUsers className="text-teal-600 text-2xl" />,
    title: "Expanded Outreach",
    desc: "Reach new audiences through our national patient and donor network."
  },
  {
    icon: <FaFileUpload className="text-red-600 text-2xl" />,
    title: "Impact Reporting",
    desc: "Receive transparent quarterly reports on lives impacted and fund utilization."
  },
  {
    icon: <FaHandshake className="text-red-600 text-2xl" />,
    title: "Collaboration",
    desc: "Work hand-in-hand with our expert field and coordination teams to make real impact."
  },
  {
    icon: <FaBuilding className="text-teal-600 text-2xl" />,
    title: "Visibility",
    desc: "Showcase your social responsibility across HopeCell campaigns and media."
  },
  {
    icon: <FaUsers className="text-red-600 text-2xl" />,
    title: "Community Trust",
    desc: "Join a growing list of trusted partners recognized for life-saving collaboration."
  },
  {
    icon: <FaHandshake className="text-red-600 text-2xl" />,
    title: "Flexible Engagement",
    desc: "Partner at your own pace—be it a one-time event or long-term collaboration."
  },
  {
    icon: <FaFileUpload className="text-teal-600 text-2xl" />,
    title: "Tailored Campaigns",
    desc: "We help co-design partnership activities that align with your mission and resources."
  },
  {
    icon: <FaBuilding className="text-red-600 text-2xl" />,
    title: "Recognition & PR",
    desc: "Get featured in donor impact newsletters, social media, and success stories."
  }
]

  return (
    <div className="space-y-8">
      
      <div >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why <span className='text-red-600'>Partner</span> With Us?
        </h2>
        
        <div className="space-y-6">
          {content.map((item, i) => (
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