import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageDonors = ({ darkMode }) => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${apiUrl}/api/donors`);
      console.log('Donors data:', response.data);
      setDonors(response.data);
    } catch (error) {
      console.error('Error fetching donors:', error);
      setError('Failed to load donors. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const deleteDonor = async (id) => {
    if (!window.confirm('Are you sure you want to delete this donor?')) return;
    try {
      await axios.delete(`${apiUrl}/api/donors/${id}`);
      setDonors(donors.filter((d) => d.donorId !== id));
    } catch (error) {
      console.error('Error deleting donor:', error);
      setError('Failed to delete donor');
    }
  };

  const viewDonorDetails = (donor) => {
    setSelectedDonor(donor);
    setShowModal(true);
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      {error && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Manage Donors
        </h1>
      </div>

      {loading ? (
        <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>Loading donors...</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
              <thead className={`${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Name
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Email
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Phone
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Blood Type
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Registered
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-slate-800 divide-slate-700' : 'bg-white divide-gray-200'}`}>
                {donors.map((donor) => (
                  <tr key={donor.donorId} className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'}`}>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {donor.fullName}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {donor.email}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {donor.phoneNumber}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {donor.bloodType || 'Unknown'}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                      {donor.registrationDate ? new Date(donor.registrationDate).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => viewDonorDetails(donor)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs md:text-sm"
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteDonor(donor.donorId)}
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

          {/* Pagination would go here */}
        </>
      )}

      {/* Donor Details Modal */}
      {showModal && selectedDonor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
              Donor Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                  Personal Information
                </h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Full Name:</span> {selectedDonor.fullName}</p>
                  <p><span className="font-medium">Email:</span> {selectedDonor.email}</p>
                  <p><span className="font-medium">Phone:</span> {selectedDonor.phoneNumber}</p>
                  <p><span className="font-medium">Gender:</span> {selectedDonor.gender}</p>
                  <p><span className="font-medium">Age:</span> {selectedDonor.age}</p>
                  <p><span className="font-medium">Ethnicity:</span> {selectedDonor.ethnicity || 'Not specified'}</p>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                  Address Information
                </h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Street:</span> {selectedDonor.streetAddress || 'Not provided'}</p>
                  <p><span className="font-medium">City:</span> {selectedDonor.city || 'Not provided'}</p>
                  <p><span className="font-medium">State/Province:</span> {selectedDonor.stateProvince || 'Not provided'}</p>
                  <p><span className="font-medium">ZIP/Postal Code:</span> {selectedDonor.zipPostalCode || 'Not provided'}</p>
                  <p><span className="font-medium">Country:</span> {selectedDonor.country || 'Not provided'}</p>
                </div>
              </div>

              {/* Health Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                  Health Information
                </h3>
                <div className="space-y-2">
                  <p className='dark:text-gray-200'><span className="font-medium">Health Conditions:</span> {selectedDonor.hasHealthConditions ? 'Yes' : 'No'}</p>
                  <p><span className="font-medium">Blood Type:</span> {selectedDonor.bloodType || 'Unknown'}</p>
                </div>
              </div>

              {/* Donation Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
                  Donation Preferences
                </h3>
                <div className="space-y-2">
                  <p className='dark:text-gray-200'><span className="font-medium">Willingness to Donate:</span> {selectedDonor.willingnessToDonate}</p>
                  <p className='dark:text-gray-200'><span className="font-medium">ID Verification Agreed:</span> {selectedDonor.agreedToIdVerification ? 'Yes' : 'No'}</p>
                  <p className='dark:text-gray-200'><span className="font-medium">Registration Date:</span> {selectedDonor.registrationDate ? new Date(selectedDonor.registrationDate).toLocaleString() : 'N/A'}</p>
                  <p className='dark:text-gray-200'><span className="font-medium">Status:</span> {selectedDonor.isActive ? 'Active' : 'Inactive'}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedDonor(null);
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

export default ManageDonors;