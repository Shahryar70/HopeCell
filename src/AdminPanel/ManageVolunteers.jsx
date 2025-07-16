import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageVolunteers = ({ darkMode }) => {
   const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedVolunteers, setSelectedVolunteers] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchVolunteers();
  }, []);
  const fetchVolunteers = async () => {
  try {
    setLoading(true);
    setError(null);
    const response = await axios.get(`${apiUrl}/api/Volunteers`);
    console.log("Volunteer Data:", response.data);
    setVolunteers(response.data);
  } catch(error){
    console.log("Error while fetching Vounteer data: ", error);
    setError("Failed to laod volunteer. Please try again");
  } finally{
    setLoading(false);
  }
  };

  const deleteVolunteer= async (id) => {
 if(!window.confirm("Are you sure that you want to delete this donor?" )) return;
 try{
  await axios.delete(`${apiUrl}/api/Volunteers/${id}`);
  setVolunteers(volunteers.filter((v) => v.id !== id));
 } catch (error) {
  console.error('Error deleting Vounteer:', error);
  setError('Failed to delete Vounteer');
 }
  };

  const ViewVolunteerDetils = (volunteer) => {
    setSelectedVolunteers(volunteer);
    setShowModal(true);
  }

  return (
 <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
{error && (
  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"> {error} </div>
)}
<div className='flex justify-between items-center mb-6'>
<h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
Manage Volunteer
</h1>
</div>
{loading ? (
  <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>Loading Volunteers....</p>
) : (
  <>
  <div className="overflow-x-auto">
 <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
  <thead className={`${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Full Name
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Email
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Phone
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                  City/Location
                  </th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Age
                  </th>
                 <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-slate-800 divide-slate-700': 'bg-white divide-gray-200' }`}>
            {volunteers.map((volunteer) => (
              <tr key={volunteer.id}  className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'}`}>
                 <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {volunteer.fullName}
                    </td>
                      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {volunteer.email}
                    </td>
              <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {volunteer.phone}
                    </td>
                            <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {volunteer.city}
                    </td>
                        <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {volunteer.age}
                    </td>
                   <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => ViewVolunteerDetils(volunteer)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs md:text-sm"
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteVolunteer(volunteer.id)}
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
  </>)}
{showModal && selectedVolunteers && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg w-full  max-w-2xl max-h-[90vh] overflow-y-auto">
<h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Volunteer Details</h2>
<div className="grid grid-col-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
  <h3 className="text-lg font-bold text-gray-800 dark:text-white border-b pb-2">Personal Information</h3>
  <div className="space-y-2">
    <p><span className="font-medium">Full Name:</span> {selectedVolunteers.fullName}</p>
     <p><span className="font-medium">Email:</span> {selectedVolunteers.email}</p>
      <p><span className="font-medium">Phone:</span> {selectedVolunteers.phone}</p>
       <p><span className="font-medium">Age:</span> {selectedVolunteers.age}</p>
          <p><span className="font-medium">Location:</span> {selectedVolunteers.city || 'Not specified'}</p>
  </div>
 
  </div>
 <div className="space-y-4">
 <h3 className="text-lg font-bold text-gray-800 dark:text-white border-b pb-2">Other Details</h3>
 <div className="space-y-2">
  <p><span className="font-medium">Availability: </span> {selectedVolunteers.availability || 'Not specified'}</p>
   <p><span className="font-medium">Interests: </span> {selectedVolunteers.interests || 'Not specified'}</p>
    <p><span className="font-medium">Motivation: </span> {selectedVolunteers.motivation || 'Not specified'}</p>
     <p><span className="font-medium">Contacted Conset: </span> {selectedVolunteers.consent ? 'Yes': 'No'}</p>
      <p><span className="font-medium">Registration Date & Time: </span>
       {selectedVolunteers.createdAt ? new Date(selectedVolunteers.createdAt).toLocaleString(): 'N/A'}</p>
 </div>
  </div>
</div>
      <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedVolunteers(null);
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

export default ManageVolunteers;
