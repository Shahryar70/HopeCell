import React from 'react';

const ManageVolunteers = () => {
  const volunteers = [
    { id: 1, name: 'Sara Malik', email: 'sara@example.com', joined: '2024-05-01' },
    { id: 2, name: 'Hamza Yousuf', email: 'hamza@example.com', joined: '2024-05-10' },
    { id: 3, name: 'Ayesha Khan', email: 'ayesha@example.com', joined: '2024-05-15' },
    { id: 4, name: 'Bilal Ahmed', email: 'bilal@example.com', joined: '2024-05-20' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold">Manage Volunteers</h2>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm">
          Add Volunteer
        </button>
      </div>

      {/* Table Container with responsive overflow */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-900">
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
          <tbody className="bg-white divide-y divide-gray-200">
            {volunteers.map((v) => (
              <tr key={v.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base">
                  {v.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base">
                  {v.email}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base">
                  {v.joined}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base">
                  <div className="flex space-x-2">
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-2 py-1 rounded text-xs md:text-sm">
                      Edit
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs md:text-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination for when you have more data */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing 1 to {volunteers.length} of {volunteers.length} entries
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded text-sm disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-1 border rounded text-sm bg-slate-900 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageVolunteers;