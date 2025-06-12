import {React,useState} from 'react';
import { FaMoon, FaSun, FaUserCircle, FaChevronDown, FaBars } from 'react-icons/fa';

const TopBar = ({ darkMode, setDarkMode, setSidebarOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-800 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Mobile menu button */}
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 mr-2 text-slate-600 dark:text-slate-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <FaBars size={18} />
          </button>
          <div className="text-teal-600 dark:text-teal-400 font-bold text-xl mr-2">
            <span className="text-slate-900 dark:text-white">Hope</span>Cell
          </div>
        </div>

        {/* Right side - Controls */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" size={18} />
            ) : (
              <FaMoon className="text-slate-600" size={18} />
            )}
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <FaUserCircle className="text-slate-600 dark:text-slate-300" size={24} />
              <span className="hidden md:inline text-sm font-medium text-slate-700 dark:text-slate-200">
                Admin
              </span>
              <FaChevronDown
                className={`text-slate-400 transition-transform ${
                  profileOpen ? 'transform rotate-180' : ''
                }`}
                size={14}
              />
            </button>

            {profileOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setProfileOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-700 rounded-md shadow-lg py-1 z-40">
                  <a href="#" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-600">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-600">
                    Settings
                  </a>
                  <div className="border-t border-gray-200 dark:border-slate-600 my-1"></div>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-slate-600">
                    Sign out
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;