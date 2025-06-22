import React from 'react'
import { FaBuilding, FaUser, FaHandshake, FaFileUpload } from 'react-icons/fa'
const PartnerUsForm = ({ onSubmit, formData, handleChange }) => {
  return (
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Express Your Interest
      </h2>
      
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Organization Details */}
        <div className="space-y-2 border-b border-gray-200 pb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaBuilding className="text-red-600 mr-2" />
            Organization Details
          </h3>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
                  <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
            </div>
          <div>        <label htmlFor="orgType" className="block text-sm font-medium text-gray-700 mb-1">
              Organization Type <span className="text-red-500">*</span>
            </label>
            <select
              id="orgType"
              name="orgType"
              value={formData.orgType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select type</option>
              <option value="School">School / University</option>
              <option value="Hospital">Hospital</option>
              <option value="Mosque">Mosque</option>
              <option value="NGO">NGO</option>
              <option value="Company">Company</option>
              <option value="Other">Other</option>
            </select></div>
          
          </div>
          
       
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Location / Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>
        
        {/* Contact Person */}
        <div className="space-y-2 border-b border-gray-200 pb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaUser className="text-red-600 mr-2" />
            Contact Person
          </h3>
          
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>
        </div>
        
        {/* Partnership Types */}
        <div className="space-y-2 border-b border-gray-200 pb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaHandshake className="text-red-600 mr-2" />
            Intent of Partnership
          </h3>
          
          <p className="text-sm text-gray-500 mb-3">
            What would you like to collaborate on? <span className="text-red-500">*</span>
          </p>
          
          <div className=" grid grid-cols-2 gap-4">
            {[
              'Host awareness events',
              'Register stem cell donors',
              'Fund patients',
              'Refer patients',
              'Run CSR campaigns',
              'Other'
            ].map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={`type-${type}`}
                  name="partnershipTypes"
                  value={type}
                  checked={formData.partnershipTypes.includes(type)}
                  onChange={handleChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="space-y-2">
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message or Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Documents (Optional)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <FaFileUpload className="mx-auto h-8 w-8 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file"
                      type="file"
                      className="sr-only"
                      onChange={handleChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC up to 5MB
                </p>
              </div>
            </div>
            {formData.file && (
              <p className="mt-1 text-sm text-gray-600">
                Selected: {formData.file.name}
              </p>
            )}
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition"
          >
            Submit Partnership Request
          </button>
        </div>
      </form>
    </div>  )
}

export default PartnerUsForm