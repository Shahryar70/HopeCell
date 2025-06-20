import {React,useState} from 'react'
import { FaHandsHelping, FaCalendarAlt, FaMapMarkerAlt, FaUserFriends, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const VolunteerForm = ({ onSubmitSuccess }) => {
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    age: '',
    availability: [],
    interests: [],
    motivation: '',
    consent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    console.log('Form submitted:', formData);
    
    // After successful submission (you'll replace this with actual API call)
    onSubmitSuccess();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'availability' || name === 'interests') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
       <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Information Side */}
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      About Volunteering
                    </h2>
                    
                    <div className="space-y-8">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 text-red-600">
                          <FaHandsHelping className="text-xl" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Volunteers Matter</h3>
                          <p className="text-gray-600">
                            Volunteers amplify our reach, helping us register more donors and support more patients. 
                            You'll be the bridge between hope and those in need.
                          </p>
                        </div>
                      </div>
    
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 text-teal-600">
                          <FaUserFriends className="text-xl" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Volunteer Roles</h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Awareness campaign organizers</li>
                            <li>Campus donor drive coordinators</li>
                            <li>Social media ambassadors</li>
                            <li>Patient support volunteers</li>
                            <li>Urgent matching coordinators</li>
                          </ul>
                        </div>
                      </div>
    
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 text-blue-600">
                          <FaClock className="text-xl" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Commitment</h3>
                          <p className="text-gray-600">
                            Flexible options available:
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                            <li>2-5 hours/week (virtual options)</li>
                            <li>Event-based volunteering</li>
                            <li>Full-time internship opportunities</li>
                          </ul>
                        </div>
                      </div>
    
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 text-purple-600">
                          <FaMapMarkerAlt className="text-xl" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Age 16+ (under 18 requires guardian consent)</li>
                            <li>Based in Pakistan (some virtual roles available globally)</li>
                            <li>Passion for helping others</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Form Side */}
                <form onSubmit={handleSubmit}  className="space-y-6">
                <div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Volunteer Application
                    </h2>
                    
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
    
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                      </div>
    
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City/Location <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="city"
                            name="city"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                          >
                            <option value="">Select</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                            Age <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            id="age"
                            name="age"
                            min="16"
                            max="80"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                      </div>
    
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Availability <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {['Weekdays', 'Weekends', 'Mornings', 'Afternoons', 'Evenings', 'Flexible'].map((option) => (
                            <div key={option} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`availability-${option}`}
                                name="availability"
                                value={option}
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`availability-${option}`} className="ml-2 text-sm text-gray-700">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
    
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Areas of Interest <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2">
                          {[
                            'Awareness Campaigns',
                            'Donor Drives',
                            'Social Media',
                            'Patient Support',
                            'Logistics',
                            'Fundraising'
                          ].map((interest) => (
                            <div key={interest} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`interest-${interest}`}
                                name="interests"
                                value={interest}
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`interest-${interest}`} className="ml-2 text-sm text-gray-700">
                                {interest}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
    
                      <div>
                        <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                          Why do you want to volunteer with HopeCell?
                        </label>
                        <textarea
                          id="motivation"
                          name="motivation"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
    
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="consent" className="font-medium text-gray-700">
                            I consent to be contacted via WhatsApp/Email <span className="text-red-500">*</span>
                          </label>
                        </div>
                      </div>
    
                    <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition"
                  >
                    Join Now
                  </button>
                </div>
                    </form>
                  </div>
                </div></form>
              </div>
            </div>
          </section>
  )
}

export default VolunteerForm