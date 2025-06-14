import React from 'react';

const ManageVolunteers = ({ darkMode }) => {
  const volunteers = [
    { id: 1, name: 'Sara Malik', email: 'sara@example.com', joined: '2024-05-01' },
    { id: 2, name: 'Hamza Yousuf', email: 'hamza@example.com', joined: '2024-05-10' },
    { id: 3, name: 'Ayesha Khan', email: 'ayesha@example.com', joined: '2024-05-15' },
    { id: 4, name: 'Bilal Ahmed', email: 'bilal@example.com', joined: '2024-05-20' },
  ];

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Manage Volunteers
        </h2>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm">
          Add Volunteer
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className={`${darkMode ? 'bg-slate-700' : 'bg-slate-900'}`}>
            <tr>
              <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider">
                Joined
              </th>
              <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`${darkMode ? 'bg-slate-800 divide-slate-700' : 'bg-white divide-gray-200'}`}>
            {volunteers.map((v) => (
              <tr key={v.id} className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'}`}>
                <td className={`px-4 py-3 whitespace-nowrap text-sm md:text-base ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                  {v.name}
                </td>
                <td className={`px-4 py-3 whitespace-nowrap text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                  {v.email}
                </td>
                <td className={`px-4 py-3 whitespace-nowrap text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                  {v.joined}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base">
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
          Showing 1 to {volunteers.length} of {volunteers.length} entries
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

export default ManageVolunteers;