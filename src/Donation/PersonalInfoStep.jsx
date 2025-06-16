// components/DonationForm/PersonalInfoStep.jsx
import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaVenusMars, FaComment } from 'react-icons/fa';

const PersonalInfoStep = ({ formData, handleChange }) => {
  return (
    <>
      {/* Personal Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <FaUser className="text-teal-500 mr-2" />
          Personal Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
              <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Gender Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <div className="relative">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <FaVenusMars className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <FaMapMarkerAlt className="text-teal-500 mr-2" />
          Address Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <div className="relative">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
              <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            >
              <option value="Pakistan">Pakistan</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <FaComment className="text-teal-500 mr-2" />
          Additional Information
        </h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Leave a Comment (Optional)
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Appeal (Optional)
          </label>
          <input
            type="text"
            name="specialAppeal"
            value={formData.specialAppeal}
            onChange={handleChange}
            placeholder="e.g. I want to help children with cancer"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Donate anonymously
          </label>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoStep;