import Footer from "../Home/Footer";
import Header from "../Home/Header";
import PartnerBenefits from "./PartnerBenefits";
import PartnerUsForm from "./PartnerUsForm";
import {React, useState} from "react";
import SuccessPartner from "./SuccessPartner";
const PartnerPage = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    orgType: '',
    address: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipTypes: [],
    message: '',
    file: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        partnershipTypes: checked
          ? [...prev.partnershipTypes, value]
          : prev.partnershipTypes.filter(item => item !== value)
      }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      
      // Append all required fields
      formDataToSend.append('OrgName', formData.orgName);
      formDataToSend.append('OrgType', formData.orgType);
      formDataToSend.append('ContactName', formData.contactName);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Phone', formData.phone);
      
      // Append optional fields if they exist
      if (formData.address) formDataToSend.append('Address', formData.address);
      if (formData.message) formDataToSend.append('Message', formData.message);
      if (formData.file) formDataToSend.append('File', formData.file);
      
      // Append each partnership type separately
      formData.partnershipTypes.forEach(type => {
        formDataToSend.append('PartnershipTypes', type);
      });

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/Partner`, {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.errors) {
          const errorMessages = Object.entries(errorData.errors)
            .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
            .join('\n');
          throw new Error(errorMessages);
        }
        throw new Error(errorData.title || 'Submission failed');
      }

      const result = await response.json();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return <SuccessPartner onReset={() => setIsSubmitted(false)} />;
  }

  return (
    <>
      <Header/>
      <div className="bg-gray-50">
        <div className="container pt-12 mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Partner With <span className="text-red-600">HopeCell</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-2 max-w-3xl mx-auto">
              At HopeCell, we believe true impact is made through collaboration.
            </p>
          </div>
        </div>
        <div className="min-h-screen pt-6 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <PartnerBenefits />
              </div>
              <div className="sticky top-8 h-fit">
                <PartnerUsForm 
                  onSubmit={handleSubmit}
                  formData={formData}
                  handleChange={handleChange}
                  isLoading={isLoading}
                  error={error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PartnerPage;