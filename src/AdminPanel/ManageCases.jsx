import React, { useEffect, useState } from 'react';

const ManageCases = ({ darkMode }) => {
  const [cases, setCases] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    type: '',
    patient: '',
    location: '',
    deadline: '',
    priority: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/UrgentCases`);
      const data = await res.json();
      setCases(data);
    } catch (err) {
      console.error('Failed to fetch cases:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this case?")) return;

    try {
      await fetch(`${apiUrl}/api/UrgentCases/${id}`, { method: 'DELETE' });
      fetchCases();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleEdit = (c) => {
    setFormData(c);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await fetch(`${apiUrl}/api/UrgentCases/${formData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        await fetch(`${apiUrl}/api/UrgentCases`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      setShowModal(false);
      setIsEditing(false);
      setFormData({
        id: null,
        type: '',
        patient: '',
        location: '',
        deadline: '',
        priority: ''
      });
      fetchCases();
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Manage Urgent Cases
        </h2>
        <button
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
            setFormData({ id: null, type: '', patient: '', location: '', deadline: '', priority: '' });
          }}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
        >
          + Add Case
        </button>
      </div>

      <div className="space-y-4">
        {cases.map((c) => (
          <div
            key={c.id}
            className={`${darkMode ? 'bg-slate-700' : 'bg-white'} shadow rounded-lg p-4 flex justify-between items-center border border-gray-200 dark:border-slate-600`}
          >
            <div>
              <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                {c.type}
              </h3>
              <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                {c.patient} – {c.location}
              </p>
              <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                Deadline: {c.deadline}
              </p>
              <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-red-600'}`}>
                Priority: {c.priority}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(c)}
                className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(c.id)}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-slate-700 rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
              {isEditing ? 'Edit Case' : 'Add New Case'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Patient"
                value={formData.patient}
                onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Deadline"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Priority"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                  {isEditing ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCases;
