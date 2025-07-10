import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUpload, FaArrowLeft } from 'react-icons/fa';

const ApplicationForm = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    cnic: '',
    phone: '',
    email: '',
    city: '',
    bloodType: '',
    diagnosisDate: '',
    hospital: '',
    doctorName: '',
    doctorContact: '',
    consentAccuracy: false,
    consentContact: false
  });
  const [files, setFiles] = useState({
    diagnosis: null,
    treatment: null,
    labReports: null,
    insurance: null
  });

  useEffect(() => {
    // Parse needs from URL query
    const searchParams = new URLSearchParams(location.search);
    const needs = [];
    
    searchParams.forEach((value, key) => {
      if (key === 'other') {
        needs.push({ id: 'other', text: decodeURIComponent(value) });
      } else {
        needs.push({ id: key, text: '' });
      }
    });
    
    setSelectedNeeds(needs);
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles(prev => ({
      ...prev,
      [name]: fileList[0]
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  try {
    const formDataToSend = new FormData();

    // Convert diagnosisDate to DateOnly format (YYYY-MM-DD)
    const diagnosisDate = new Date(formData.diagnosisDate);
    const formattedDate = diagnosisDate.toISOString().split('T')[0];

    // Add all fields with proper names
    formDataToSend.append('FullName', formData.fullName);
    formDataToSend.append('Age', formData.age);
    formDataToSend.append('Gender', formData.gender);
    formDataToSend.append('CNIC', formData.cnic);
    formDataToSend.append('PhoneNumber', formData.phone);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('City', formData.city);
    formDataToSend.append('BloodType', formData.bloodType);
    formDataToSend.append('DiagnosisDate', formattedDate);
    formDataToSend.append('HospitalName', formData.hospital);
    formDataToSend.append('DoctorName', formData.doctorName);
    formDataToSend.append('DoctorContact', formData.doctorContact);
    formDataToSend.append('ConsentAccuracy', formData.consentAccuracy);
    formDataToSend.append('ConsentContact', formData.consentContact);

  //support needs
selectedNeeds.forEach((need, index) => {
  formDataToSend.append(`SupportNeeds[${index}].NeedType`, need.id);
  formDataToSend.append(`SupportNeeds[${index}].Description`, need.text || `Need for ${need.id}`); // Always include description
});

    // Add files with correct field names
    if (files.diagnosis) formDataToSend.append('DiagnosisProof', files.diagnosis);
    if (files.treatment) formDataToSend.append('TreatmentPlan', files.treatment);
    if (files.labReports) formDataToSend.append('LabReports', files.labReports);
    if (files.insurance) formDataToSend.append('InsuranceInfo', files.insurance);

    const response = await fetch(`${apiUrl}/api/SupportRequests`, {
      method: 'POST',
      body: formDataToSend,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Validation errors:', errorData.errors);
      
      // Format validation errors for display
      const errorMessages = Object.entries(errorData.errors || {})
        .map(([field, errors]) => `${field}: ${errors.join(', ')}`)
        .join('\n');
      
      throw new Error(errorMessages || 'Validation failed');
    }

    const result = await response.json();
    navigate('/get-support/success', { state: { ref: result.referenceNumber } });

  } catch (error) {
    console.error('Submission error:', error);
    setError(error.message);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-red-600 hover:text-red-800 mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to needs selection
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Application</h1>
          <p className="text-lg text-gray-600">
            Please fill in your details so we can process your support request.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="1"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label htmlFor="cnic" className="block text-sm font-medium text-gray-700 mb-1">
                  CNIC / ID Number *
                </label>
                <input
                  type="text"
                  id="cnic"
                  name="cnic"
                  required
                  value={formData.cnic}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City / Province *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
            </div>
          </div>

          {/* Medical Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Blood Disease *
                </label>
                <input
                  type="text"
                  id="bloodType"
                  name="bloodType"
                  required
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
              <div>
                <label htmlFor="diagnosisDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Diagnosis Date *
                </label>
                <input
                  type="date"
                  id="diagnosisDate"
                  name="diagnosisDate"
                  required
                  value={formData.diagnosisDate}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
              <div>
                <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-1">
                  Hospital Name *
                </label>
                <input
                  type="text"
                  id="hospital"
                  name="hospital"
                  required
                  value={formData.hospital}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700 mb-1">
                    Treating Doctor Name *
                  </label>
                  <input
                    type="text"
                    id="doctorName"
                    name="doctorName"
                    required
                    value={formData.doctorName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                  />
                </div>
                <div>
                  <label htmlFor="doctorContact" className="block text-sm font-medium text-gray-700 mb-1">
                    Doctor Contact Information *
                  </label>
                  <input
                    type="text"
                    id="doctorContact"
                    name="doctorContact"
                    required
                    value={formData.doctorContact}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Document Uploads Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Document Uploads</h2>
            <div className="space-y-4">
              {[
                { id: 'diagnosis', label: 'Diagnosis Proof *', required: true },
                { id: 'treatment', label: 'Treatment Plan *', required: true },
                { id: 'labReports', label: 'Lab Reports *', required: true },
                { id: 'insurance', label: 'Insurance Information (optional)', required: false }
              ].map((doc) => (
                <div key={doc.id}>
                  <label htmlFor={doc.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {doc.label}
                  </label>
                  <div className="flex items-center">
                    <label className="flex flex-col items-center px-4 py-2 bg-white rounded-md border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <FaUpload className="text-red-600 mr-2" />
                      <span className="text-sm">Choose File</span>
                      <input
                        type="file"
                        id={doc.id}
                        name={doc.id}
                        required={doc.required}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span className="ml-3 text-sm text-gray-500">
                      {files[doc.id] ? files[doc.id].name : 'No file chosen'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Selected Needs Section */}
{selectedNeeds.length > 0 && (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Support Needs</h2>
    <div className="space-y-4">
      {selectedNeeds.map((need, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              {need.id === 'other' ? 'Other' : need.id.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </span>
          </div>
          <div>
            <label htmlFor={`need-${index}-desc`} className="block text-sm font-medium text-gray-700 mb-1">
              Description for this need *
            </label>
            <input
              type="text"
              id={`need-${index}-desc`}
              value={need.text}
              onChange={(e) => {
                const updatedNeeds = [...selectedNeeds];
                updatedNeeds[index].text = e.target.value;
                setSelectedNeeds(updatedNeeds);
              }}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
              placeholder={`Describe your ${need.id} need`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          {/* Consent */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Consent</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consentAccuracy"
                    name="consentAccuracy"
                    type="checkbox"
                    required
                    checked={formData.consentAccuracy}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consentAccuracy" className="font-medium text-gray-700">
                    I confirm all information provided is accurate *
                  </label>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consentContact"
                    name="consentContact"
                    type="checkbox"
                    required
                    checked={formData.consentContact}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consentContact" className="font-medium text-gray-700">
                    I give permission to contact me regarding this application *
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;