import React from 'react';

const ManageDonations = ({ darkMode }) => {
  const donations = [
    { id: 1, donor: 'Ali Khan', amount: 'Rs. 5000', date: '2024-06-10' },
    { id: 2, donor: 'Zainab Fatima', amount: 'Rs. 12000', date: '2024-06-09' },
    { id: 3, donor: 'Ahmed Raza', amount: 'Rs. 7500', date: '2024-06-08' },
  ];

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      <h1 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
        Manage Donations
      </h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className={`${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                Donor
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                Amount
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                Date
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`${darkMode ? 'bg-slate-800 divide-slate-700' : 'bg-white divide-gray-200'}`}>
            {donations.map((donation) => (
              <tr key={donation.id} className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'}`}>
                <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                  {donation.donor}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                  {donation.amount}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                  {donation.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-xs md:text-sm">
                      Edit
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs md:text-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={`mt-4 flex justify-between items-center ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
        <div className="text-sm">
          Showing 1 to {donations.length} of {donations.length} entries
        </div>
        <div className="flex space-x-2">
          <button className={`px-3 py-1 border rounded text-sm ${darkMode ? 'border-slate-600 hover:bg-slate-700' : 'hover:bg-gray-100'}`} disabled>
            Previous
          </button>
          <button className={`px-3 py-1 rounded text-sm ${darkMode ? 'bg-slate-700 text-white' : 'bg-slate-900 text-white'}`}>
            1
          </button>
          <button className={`px-3 py-1 border rounded text-sm ${darkMode ? 'border-slate-600 hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageDonations;