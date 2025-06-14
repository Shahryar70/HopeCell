import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageVolunteers = ({ darkMode }) => {
  const [volunteers, setVolunteers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingVolunteer, setEditingVolunteer] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', joined: '' });
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchVolunteers = async () => {
    const res = await axios.get(`${apiUrl}/api/Volunteers`);
    setVolunteers(res.data);
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

const handleSubmit = async () => {
  try {
    if (editingVolunteer) {
      await axios.put(`${apiUrl}/api/Volunteers/${editingVolunteer.id}`, {
        ...form,
        id: editingVolunteer.id, // ✅ include the id in the request body
      });
    } else {
      await axios.post(`${apiUrl}/api/Volunteers`, form);
    }
    fetchVolunteers();
    setShowModal(false);
    setEditingVolunteer(null);
    setForm({ name: '', email: '', joined: '' });
  } catch (error) {
    console.error('Error saving volunteer:', error.response || error.message);
    alert('Something went wrong. Please try again.');
  }
};


  const handleDelete = async (id) => {
    await axios.delete(`${apiUrl}/api/Volunteers/${id}`);
    fetchVolunteers();
  };

  const openEditModal = (v) => {
    setEditingVolunteer(v);
    setForm({ name: v.name, email: v.email, joined: v.joined.split('T')[0] });
    setShowModal(true);
  };

  const openAddModal = () => {
    setEditingVolunteer(null);
    setForm({ name: '', email: '', joined: '' });
    setShowModal(true);
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Manage Volunteers
        </h2>
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm"
          onClick={openAddModal}
        >
          Add Volunteer
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className={`${darkMode ? 'bg-slate-700' : 'bg-slate-900'}`}>
            <tr>
              <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider">Joined</th>
              <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className={`${darkMode ? 'bg-slate-800 divide-slate-700' : 'bg-white divide-gray-200'}`}>
            {volunteers.map((v) => (
              <tr key={v.id} className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'}`}>
                <td className={`px-4 py-3 text-sm md:text-base ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>{v.name}</td>
                <td className={`px-4 py-3 text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>{v.email}</td>
                <td className={`px-4 py-3 text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>{v.joined.split('T')[0]}</td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-xs" onClick={() => openEditModal(v)}>Edit</button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs" onClick={() => handleDelete(v.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded shadow-md w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
              {editingVolunteer ? 'Edit Volunteer' : 'Add Volunteer'}
            </h3>
            <input type="text" className="w-full mb-2 px-3 py-2 border rounded" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input type="email" className="w-full mb-2 px-3 py-2 border rounded" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="date" className="w-full mb-4 px-3 py-2 border rounded" value={form.joined} onChange={(e) => setForm({ ...form, joined: e.target.value })} />
            <div className="flex justify-end space-x-2">
              <button className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded" onClick={handleSubmit}>{editingVolunteer ? 'Update' : 'Add'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageVolunteers;
