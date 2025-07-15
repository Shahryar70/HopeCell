import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome';
import ManageDonations from './ManageDonations';
import ManageVolunteers from './ManageVolunteers';
import ManageCases from './ManageCases';
import TopBar from './TopBar';
import ManageDonors from './ManageDonors';

const AdminDashboard = () => {
  const [section, setSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const renderSection = () => {
    switch (section) {
      case 'cases': return <ManageCases darkMode={darkMode} />;
      case 'donations': return <ManageDonations darkMode={darkMode} />;
      case 'volunteers': return <ManageVolunteers darkMode={darkMode} />;
      case 'donor': return <ManageDonors darkMode={darkMode}/>
      default: return <DashboardHome darkMode={darkMode} />;
    }
  };

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'dark' : ''}`}>
      {/* TopBar with dark mode control and mobile menu button */}
      <TopBar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          setSection={setSection} 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
        />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-100 dark:bg-slate-800">
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {renderSection()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;