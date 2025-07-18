import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageDonations = ({ darkMode }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${apiUrl}/api/donations`);
      console.log('Donations data:', response.data); // Add this for debugging
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error);
      setError('Failed to load donations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const deleteDonation = async (id) => {
    if (!window.confirm('Are you sure you want to delete this donation?')) return;
    try {
      await axios.delete(`${apiUrl}/api/donations/${id}`);
      setDonations(donations.filter((d) => d.DonationId !== id));
    } catch (error) {
      console.error('Error deleting donation:', error);
      setError('Failed to delete donation');
    }
  };

  const viewDonationDetails = (donation) => {
    setSelectedDonation(donation);
    setShowModal(true);
  };

  return (
    <div className={`bg-white dark:bg-slate-700 rounded-lg shadow p-6`}>
      {error && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}
      
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
    <tr key={donation.donationId} className={`${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'}`}>
      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
        {donation.isAnonymous ? 'Anonymous' : donation.name || 'N/A'}
      </td>
      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
        {donation.email || 'N/A'}
      </td>
      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
        Rs. {donation.amount ? donation.amount.toLocaleString() : '0'}
      </td>
      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
        {donation.paymentMethod || 'N/A'}
      </td>
      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
        {donation.donationDate ? new Date(donation.donationDate).toLocaleDateString() : 'N/A'}
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
            onClick={() => deleteDonation(donation.donationId)}
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

          {/* Pagination and other elements remain the same */}
        </>
      )}

      {/* Modal - Make sure to use DonationDate instead of createdAt */}
     {showModal && selectedDonation && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-slate-700 p-6 rounded shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
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
            <p className='dark:text-gray-200'><span className="font-medium">Name:</span> {selectedDonation.isAnonymous ? 'Anonymous' : selectedDonation.name || 'N/A'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">Email:</span> {selectedDonation.email || 'N/A'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">Phone:</span> {selectedDonation.phone || 'N/A'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">Gender:</span> {selectedDonation.gender || 'Not specified'}</p>
          </div>
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
            Address Information
          </h3>
          <div className="space-y-2">
            <p className='dark:text-gray-200'><span className="font-medium">Address:</span> {selectedDonation.address || 'Not provided'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">City:</span> {selectedDonation.city || 'Not provided'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">Country:</span> {selectedDonation.country || 'Pakistan'}</p>
          </div>
        </div>

        {/* Donation Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
            Donation Details
          </h3>
          <div className="space-y-2">
            <p className='dark:text-gray-200'><span className="font-medium">Amount:</span> Rs. {selectedDonation.amount || '0'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">Payment Method:</span> {selectedDonation.paymentMethod || 'N/A'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">Date:</span> {selectedDonation.donationDate ? new Date(selectedDonation.donationDate).toLocaleString() : 'N/A'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">Anonymous:</span> {selectedDonation.isAnonymous ? 'Yes' : 'No'}</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">
            Additional Information
          </h3>
          <div className="space-y-2">
            <p className='dark:text-gray-200'><span className="font-medium">Comment:</span> {selectedDonation.comment || 'None'}</p>
            <p className='dark:text-gray-200'><span className="font-medium">Special Appeal:</span> {selectedDonation.specialAppeal || 'None'}</p>
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