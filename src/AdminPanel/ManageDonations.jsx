import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageDonations = ({ darkMode }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newDonation, setNewDonation] = useState({ donor: '', amount: '', date: '' });
  const [editingDonation, setEditingDonation] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/ManageDonations`);
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
      await axios.delete(`${apiUrl}/api/ManageDonations/${id}`);
      setDonations(donations.filter((d) => d.id !== id));
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  const handleAddOrUpdateDonation = async () => {
    try {
  if (editingDonation) {
  const updatedDonation = { ...newDonation, id: editingDonation.id }; // Include ID in body
  const response = await axios.put(
    `${apiUrl}/api/ManageDonations/${editingDonation.id}`,
    updatedDonation
  );
  setDonations(
    donations.map((donation) =>
      donation.id === editingDonation.id ? response.data : donation
    )
  );
}
else {
        const response = await axios.post(`${apiUrl}/api/ManageDonations`, newDonation);
        setDonations([...donations, response.data]);
      }
      setShowModal(false);
      setNewDonation({ donor: '', amount: '', date: '' });
      setEditingDonation(null);
    } catch (error) {
      console.error('Error saving donation:', error);
    }
  };

  const handleEditClick = (donation) => {
    setNewDonation({ donor: donation.donor, amount: donation.amount, date: donation.date });
    setEditingDonation(donation);
    setShowModal(true);
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Manage Donations
        </h1>
        <button
          onClick={() => {
            setNewDonation({ donor: '', amount: '', date: '' });
            setEditingDonation(null);
            setShowModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
        >
          Add Donation
        </button>
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
                      Rs. {donation.amount}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                      {donation.date?.substring(0, 10)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditClick(donation)}
                          className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-xs md:text-sm"
                        >
                          Edit
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
              {editingDonation ? 'Edit Donation' : 'Add Donation'}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Donor Name"
                value={newDonation.donor}
                onChange={(e) => setNewDonation({ ...newDonation, donor: e.target.value })}
                className="w-full px-3 py-2 border rounded dark:bg-slate-800 dark:text-white"
              />
              <input
                type="number"
                placeholder="Amount"
                value={newDonation.amount}
                onChange={(e) => setNewDonation({ ...newDonation, amount: e.target.value })}
                className="w-full px-3 py-2 border rounded dark:bg-slate-800 dark:text-white"
              />
              <input
                type="date"
                value={newDonation.date}
                onChange={(e) => setNewDonation({ ...newDonation, date: e.target.value })}
                className="w-full px-3 py-2 border rounded dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setNewDonation({ donor: '', amount: '', date: '' });
                  setEditingDonation(null);
                }}
                className="px-4 py-2 border rounded text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrUpdateDonation}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
              >
                {editingDonation ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageDonations;
