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
    }
   }
  return (
    <div>Partner</div>
  )
}

export default Partner