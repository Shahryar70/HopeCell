import Footer from "../Home/Footer";
import Header from "../Home/Header";
import PartnerBenefits from "./PartnerBenefits";
import PartnershipSection from "./PartnershipSection";
import PartnerUsForm from "./PartnerUsForm";
import {React, useState} from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // For testing
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <PartnershipSection onReset={() => setIsSubmitted(false)} />;
  }

  return (
    <>
    <Header/>
     <div className="bg-gray-50">
  
 <div className="container pt-12 mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl">
          
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
        Partner With <span className="text-red-600">HopeCell</span>
</h1>       
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-800 mb-2 max-w-3xl mx-auto">
  At HopeCell, we believe true impact is made through collaboration. Here’s what your organization gains by becoming a partner:
        </p>
      </div>
    </div>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits Content */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <PartnerBenefits />
          </div>
          
          {/* Right Column - Form */}
          <div className="sticky top-8 h-fit">
            <PartnerUsForm 
              onSubmit={handleSubmit}
              formData={formData}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div></div>
 <Footer/>
    </>
  );
};

export default PartnerPage;