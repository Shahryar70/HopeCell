import {React,useState} from 'react';
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaDonate, 
  FaHeartbeat, 
  FaSignOutAlt, 
  FaUserFriends
} from 'react-icons/fa';

import { MdOutlineMedicalServices } from 'react-icons/md';

const Sidebar = ({ setSection, sidebarOpen, setSidebarOpen }) => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleSectionChange = (section) => {
    setSection(section);
    setActiveSection(section);
    setSidebarOpen(false); // Close sidebar on mobile when item is selected
  };

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:relative z-30 w-64 h-full
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        bg-gradient-to-b from-teal-800 to-teal-900 text-white
        flex flex-col
      `}>
        <div className="flex items-center justify-center p-4 border-b border-teal-600">
          <MdOutlineMedicalServices className="text-3xl mr-2 text-teal-300" />
          <h2 className="text-2xl font-bold text-teal-100">HopeCell</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => handleSectionChange('dashboard')} 
            className={`
              flex items-center w-full p-3 rounded-lg transition-all
              ${activeSection === 'dashboard' ? 'bg-teal-600 text-white' : 'text-teal-100 hover:bg-teal-700'}
            `}
          >
            <FaTachometerAlt className="mr-3" /> 
            <span>Dashboard</span>
          </button>
          
          <button 
            onClick={() => handleSectionChange('cases')} 
            className={`
              flex items-center w-full p-3 rounded-lg transition-all
              ${activeSection === 'cases' ? 'bg-teal-600 text-white' : 'text-teal-100 hover:bg-teal-700'}
            `}
          >
            <FaHeartbeat className="mr-3" /> 
            <span>Urgent Cases</span>
          </button>
          
          <button 
            onClick={() => handleSectionChange('donations')} 
            className={`
              flex items-center w-full p-3 rounded-lg transition-all
              ${activeSection === 'donations' ? 'bg-teal-600 text-white' : 'text-teal-100 hover:bg-teal-700'}
            `}
          >
            <FaDonate className="mr-3" /> 
            <span>Donations</span>
          </button>
          
          <button 
            onClick={() => handleSectionChange('volunteers')} 
            className={`
              flex items-center w-full p-3 rounded-lg transition-all
              ${activeSection === 'volunteers' ? 'bg-teal-600 text-white' : 'text-teal-100 hover:bg-teal-700'}
            `}
          >
            <FaUsers className="mr-3" /> 
            <span>Volunteers</span>
          </button>

              <button 
            onClick={() => handleSectionChange('donor')} 
            className={`
              flex items-center w-full p-3 rounded-lg transition-all
              ${activeSection === 'donor' ? 'bg-teal-600 text-white' : 'text-teal-100 hover:bg-teal-700'}
            `}
          >
            <FaUsers className="mr-3" /> 
            <span>Register Donors</span>
          </button>
          <button onClick={() => handleSectionChange('partner')}
            className={`flex items-center w-full p-3 rounded-lg transition-all
               ${activeSection === 'partner' ? 'bg-teal-600 text-white': 'text-teal-100 hover:bg-teal-700'}`}
            >
              <FaUserFriends className='mr-3'/>
             <span>Partner</span>
          </button>
        </nav>
        
        <div className="p-4 border-t border-teal-600">
          <button 
            className="flex items-center w-full p-3 rounded-lg text-teal-100 hover:bg-teal-700 transition-all"
            onClick={() => console.log('Logout')}
          >
            <FaSignOutAlt className="mr-3" /> 
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;