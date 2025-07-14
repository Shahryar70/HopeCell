import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageDonations = ({ darkMode }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/donations`);
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteDonation = async (id) => {
    if (!window.confirm('Are you sure you want to delete this donation?')) return;
    try {
      await axios.delete(`${apiUrl}/api/donations/${id}`);
      setDonations(donations.filter((d) => d.id !== id));
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  const viewDonationDetails = (donation) => {
    setSelectedDonation(donation);
    setShowModal(true);
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Manage Donations
        </h1>
      </div>

      {loading ? (
        <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>Loading donations...</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
              <thead className={`${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Donor
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Email
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Amount
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Payment Method
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
                      {donation.IsAnonymous ? 'Anonymous' : donation.Name}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {donation.Email}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      Rs. {donation.Amount}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {donation.PaymentMethod}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                      {new Date(donation.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => viewDonationDetails(donation)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs md:text-sm"
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteDonation(donation.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs md:text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
        </>
      )}

      {/* Details Modal */}
      {showModal && selectedDonation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
              Donation Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                  Personal Information
                </h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {selectedDonation.IsAnonymous ? 'Anonymous' : selectedDonation.Name}</p>
                  <p><span className="font-medium">Email:</span> {selectedDonation.Email}</p>
                  <p><span className="font-medium">Phone:</span> {selectedDonation.Phone}</p>
                  <p><span className="font-medium">Gender:</span> {selectedDonation.Gender || 'Not specified'}</p>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                  Address Information
                </h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Address:</span> {selectedDonation.Address || 'Not provided'}</p>
                  <p><span className="font-medium">City:</span> {selectedDonation.City || 'Not provided'}</p>
                  <p><span className="font-medium">Country:</span> {selectedDonation.Country || 'Pakistan'}</p>
                </div>
              </div>

              {/* Donation Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                  Donation Details
                </h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Amount:</span> Rs. {selectedDonation.Amount}</p>
                  <p><span className="font-medium">Payment Method:</span> {selectedDonation.PaymentMethod}</p>
                  <p><span className="font-medium">Date:</span> {new Date(selectedDonation.createdAt).toLocaleString()}</p>
                  <p><span className="font-medium">Anonymous:</span> {selectedDonation.IsAnonymous ? 'Yes' : 'No'}</p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Comment:</span> {selectedDonation.Comment || 'None'}</p>
                  <p><span className="font-medium">Special Appeal:</span> {selectedDonation.SpecialAppeal || 'None'}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedDonation(null);
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageDonations;