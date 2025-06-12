import React from 'react';

const ManageDonations = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Donations</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Ali Khan</td>
              <td className="px-6 py-4 whitespace-nowrap">Rs. 5000</td>
              <td className="px-6 py-4 whitespace-nowrap">2024-06-10</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-2 py-1 rounded text-xs md:text-sm">
                      Edit
                    </button>
         <button className="bg-red-600 ml-2 hover:bg-red-700 text-white px-2 py-1 rounded text-xs md:text-sm">
                      Delete
                    </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDonations;