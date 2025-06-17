import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
// import HospitalPartners from '../components/HospitalPartners'; // Component for hospital logos

const About = () => {
  return (
    <>
    <Header/>
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-teal-800 mb-4">About HopeCell</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering South Asia's fight against blood cancers through stem cell awareness, 
          donor matching, and holistic support systems.
        </p>
      </div>

      {/* 1. Our Mission */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-red-600 mb-6">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              HopeCell addresses <strong>three critical gaps</strong> in South Asian blood cancer care:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-teal-100 text-teal-800 rounded-full p-2 mr-3">➊</span>
                <span><strong>Donor shortages</strong> due to limited registry participation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-teal-100 text-teal-800 rounded-full p-2 mr-3">➋</span>
                <span><strong>Cultural barriers</strong> around stem cell donation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-teal-100 text-teal-800 rounded-full p-2 mr-3">➌</span>
                <span><strong>Financial burdens</strong> preventing treatment access</span>
              </li>
            </ul>
            <Link 
              to="/donor-registry" 
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Register as Donor
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border border-teal-100">
            <img 
              src="/images/donor-process.png" 
              alt="Stem cell donation process"
              className="rounded-lg"
            />
            <p className="text-sm text-center mt-2 text-gray-500">
              Our simplified donor registration process takes just 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* 2. South Asia Focus */}
      <section className="mb-16 bg-teal-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-teal-800 mb-6">Why South Asia Needs HopeCell</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">The Crisis in Numbers</h3>
            <ul className="space-y-3 mb-6">
              <li>• Pakistan has <strong>only 0.01%</strong> of population in stem cell registries (vs 2% in Western countries)</li>
              <li>• <strong>72%</strong> of Pakistani patients lack matched family donors</li>
              <li>• <strong>3x higher</strong> blood cancer mortality due to late diagnosis</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-600">Breaking Cultural Barriers</h3>
            <p className="mb-4">
              We work with <strong>religious scholars</strong> and <strong>community leaders</strong> to:
            </p>
            <ul className="space-y-2">
              <li>• Provide fatwas supporting donation</li>
              <li>• Debunk myths about stem cell harvesting</li>
              <li>• Conduct mosque/madrasa awareness sessions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Hope Wallet System */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-teal-800">Beyond Cells: The Hope Wallet</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "💰",
              title: "Direct Funding",
              desc: "Sponsor specific patient needs like medicines or tests"
            },
            {
              icon: "🚑",
              title: "Transport Support",
              desc: "Fund ambulance services or patient travel"
            },
            {
              icon: "🏥",
              title: "Stay Support",
              desc: "Cover accommodation near treatment centers"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Hospital Partnerships */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-teal-800">Our Trusted Hospital Partners</h2>
        {/* <HospitalPartners /> */}
        <div className="mt-8 text-center">
          <Link 
            to="/partners" 
            className="inline-block border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition"
          >
            View All Partners
          </Link>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};
export default About