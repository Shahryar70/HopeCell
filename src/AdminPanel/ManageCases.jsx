import React from 'react';
import Sidebar from './Sidebar';

const ManageCases = ({ darkMode }) => {
  const cases = [
    {
      id: 1,
      type: 'AB+ Blood Donor',
      patient: '8yr old with Leukemia',
      location: 'Bait-ul-Sukoon Cancer Hospital',
      deadline: '48 HOURS',
      priority: 'Critical',
    },
    {
      id: 2,
      type: 'Bone Marrow Match',
      patient: '22yr old female',
      location: 'Shaukat Khanum Hospital',
      deadline: '1 WEEK',
      priority: 'High',
    },
  ];

  return (
 <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6 `}>
      
      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Manage Urgent Cases</h2>
      <div className="space-y-4">
        {cases.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow rounded-lg p-4 flex justify-between items-center border"
          >
            <div>
              <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-slate-800'}`}>{c.type}</h3>
              <p className="text-sm text-gray-500">{c.patient} – {c.location}</p>
              <p className="text-sm">Deadline: {c.deadline}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-teal-600 text-white rounded text-sm">Edit</button>
              <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCases;