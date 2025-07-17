import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Partner = ({darkMode}) => {
    const [partners, setPartners] = useState([]);
   const [loading, setLoading] = useState(true);
   const [showModal, setShowModal] = useState(false);
   const [selectedPartners, setSelectedPartners] = useState(null);
   const [error, setError] = useState(null);
   const apiUrl = process.env.REACT_APP_API_URL;

   useEffect( ()=> {
   fetchPartners();
   },[]);

   const fetchPartners = async () =>{
    try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${apiUrl}/api/Partner`);
        console.log("Partner Data: ", response.data);
        setPartners(response.data);
    } catch (error) {
        console.log("Error while fectching partner data: ", error);
        setError("Failed to load partner error please try again");
    } finally {
        setLoading(false);
    }
   };

   const deletePartner = async (id) => {
    if(!window.confirm("Are you sure that you want to delete this donor?")) return;
    try{
        await axios.delete(`${apiUrl}/api/Partner/${id}`);
        setPartners(partners.filter((p) => p.id !== id));
    } catch (error) {
        console.error("Error While Delteing Partner: ", error);
        setError("Failed to delete Partner");
    }
   };
   const ViewPartnerDetails = (partner) => {
   setSelectedPartners(partner);
   setShowModal(true);
   }

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6`}>
{error && (
    <div className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg'>{error}</div>
)}
<div className='flex justify-between items-center mb-6'>
    <h1 className={`txt-2xl font-bold ${darkMode ? 'text-white': 'text-slate-800'}`}></h1>
</div>
{loading ? (
    <p className={`text-lg ${darkMode ? 'text-white': 'text-gray-800' }`}>Loading Partners....</p>
): (
    <>
    <div className='overflow-x-auto'>
<table className='min-w-full divide-y divide-gray-200 dark:divide-slate-700'>
    <thead className={`${darkMode ? 'bg-slate-700' : 'bg-gray-50' }`}>
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
                {partners.map((partner)=>(
                    <tr key={partner.partner} className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'}`}>
                        <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {partner.orgName}
                    </td>
                     <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                      {partner.orgType}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex space-x-2'>
                            <button    onClick = {() => ViewPartnerDetails(partner)}
                                className="bg-blue-600  text-white  hover:bg-blue-600 px-3 py-1 rounded text-xs md:text-sm">
                             View
                            </button>
                            <button onClick={() => deletePartner(partner.id)}
                            className='bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm px-3 py-1'
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
    </>
)}
{showModal && selectedPartners && (
  <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
<div className='bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
<h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-white'>Partner Details</h2>
<div className='grid grid-cols-1 md:grid-cols-2'>
<div className='space-y-4'>
  <h3 className='text-lg font-bold text-gray-800 dark:text-white border-b pb-2'>Personal Information</h3>
  <div className='space-y-2'>
    <p><span className='font-medium'></span></p>
  </div>
</div>
</div>
</div>
    </div>
)}
    </div>
  )
}

export default Partner