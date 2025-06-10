import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About HopeCell */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-teal-400">About HopeCell</h3>
            <p className="mb-4">
              Bridging donors with cancer patients through stem cell and bone marrow transplants since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-teal-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Become a Donor</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Patient Support</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Our Research</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Volunteer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-teal-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-teal-400" />
                <span>Office # 403 G7, Royal Plaza Blue Area , Islambad , Pakistan</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-teal-400" />
                <a href="tel:+912022345678" className="hover:text-teal-400">+92 308 8949882</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-teal-400" />
                <a href="mailto:help@hopecell.org" className="hover:text-teal-400">help@hopecell.org</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-teal-400">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
                required
              />
              <button 
                type="submit" 
                className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} HopeCell Foundation. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer