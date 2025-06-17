import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const Support = () => {
  return (
    <>
    <Header/>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-teal-800 mb-8">Patient Support</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Urgent Needs</h2>
          <ul className="space-y-3">
            <li>• Stem cell donor matching</li>
            <li>• Financial assistance programs</li>
            <li>• Emergency medical support</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-3">
            <li>• Treatment guidance</li>
            <li>• Support groups</li>
            <li>• Clinical trial information</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 bg-teal-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Immediate Help</h2>
        <p className="mb-4">Our patient advocates are available 24/7:</p>
        <div className="flex flex-wrap gap-4">
          <a href="tel:+923001234567" className="bg-white border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-100 transition">
            Call: 0300-1234567
          </a>
          <a href="mailto:support@hopecell.org" className="bg-white border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-100 transition">
            Email Us
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Support;