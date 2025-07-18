import React, { useEffect, useState } from 'react';

const ManageCases = ({ darkMode }) => {
  const [cases, setCases] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    patient: '',
    location: '',
    deadline: '',
    priority: 'medium' // Default value
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/UrgentCases`);
      if (!res.ok) throw new Error('Failed to fetch cases');
      const data = await res.json();
      setCases(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this case?")) return;
    
    try {
      const res = await fetch(`${apiUrl}/api/UrgentCases/${id}`, { 
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!res.ok) throw new Error('Delete failed');
      fetchCases();
    } catch (err) {
      setError(err.message);
      console.error('Delete error:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const url = isEditing 
        ? `${apiUrl}/api/UrgentCases/${formData.id}`
        : `${apiUrl}/api/UrgentCases`;
        
      const method = isEditing ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.title || 'Save failed');
      }

      setShowModal(false);
      fetchCases(); // Refresh the list
    } catch (err) {
      setError(err.message);
      console.error('Save error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Render loading state
  if (isLoading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Manage Urgent Cases
        </h2>
        <button
          onClick={() => {
            setFormData({
              type: '',
              patient: '',
              location: '',
              deadline: '',
              priority: 'medium'
            });
            setIsEditing(false);
            setShowModal(true);
          }}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
        >
          + Add Case
        </button>
      </div>

      {/* Cases List */}
      <div className="space-y-4">
        {cases.length === 0 ? (
          <p className="text-center py-4">No cases found</p>
        ) : (
          cases.map((c) => (
            <div key={c.id} className={`${darkMode ? 'bg-slate-700' : 'bg-white'} shadow rounded-lg p-4 border border-gray-200 dark:border-slate-600`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    {c.type} <span className={`text-sm ml-2 px-2 py-1 rounded-full ${
                      c.priority === 'high' ? 'bg-red-100 text-red-800' :
                      c.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {c.priority}
                    </span>
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Patient: {c.patient}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                    Location: {c.location}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                    Deadline: {new Date(c.deadline).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setFormData({
                        ...c,
                        deadline: new Date(c.deadline).toISOString().split('T')[0]
                      });
                      setIsEditing(true);
                      setShowModal(true);
                    }}
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
            </div>
          ))
        )}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-slate-700 rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
              {isEditing ? 'Edit Case' : 'Add New Case'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Type</label>
                <input
                  type="text"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full border px-3 py-2 rounded dark:bg-slate-600 dark:text-gray-100 dark:border-slate-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Patient</label>
                <input
                  type="text"
                  value={formData.patient}
                  onChange={(e) => setFormData({...formData, patient: e.target.value})}
                  className="w-full border px-3 py-2 rounded dark:bg-slate-600 dark:text-gray-100 dark:border-slate-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full border px-3 py-2 rounded dark:bg-slate-600 dark:text-gray-100 dark:border-slate-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Deadline</label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                  className="w-full border px-3 py-2 rounded dark:bg-slate-600 dark:text-gray-100 dark:border-slate-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  className="w-full border px-3 py-2 rounded dark:bg-slate-600 dark:text-gray-100 dark:border-slate-500"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : isEditing ? 'Update' : 'Save'}
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