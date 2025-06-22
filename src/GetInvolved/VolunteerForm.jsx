import {React, useState} from 'react';
import { FaHandsHelping, FaCalendarAlt, FaMapMarkerAlt, FaUserFriends, FaPhone, FaClock } from 'react-icons/fa';

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
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/Volunteers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    age: formData.age,
                    availability: formData.availability,
                    interests: formData.interests,
                    motivation: formData.motivation,
                    consent: formData.consent
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Success:', data);
            onSubmitSuccess();
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
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
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Volunteer Application
                            </h2>
                            
                            {error && (
                                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                            City/Location <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
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
                                            value={formData.age}
                                            onChange={handleChange}
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
                                                    checked={formData.availability.includes(option)}
                                                    onChange={handleChange}
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
                                                    checked={formData.interests.includes(interest)}
                                                    onChange={handleChange}
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
                                        value={formData.motivation}
                                        onChange={handleChange}
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
                                            checked={formData.consent}
                                            onChange={handleChange}
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
                                        disabled={isSubmitting}
                                        className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition ${
                                            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Join Now'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerForm;