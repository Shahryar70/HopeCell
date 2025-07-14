import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ManageDonations = () => {
  const [donations, setDonation] = useState([]);
  const [loading,setLoading]= useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect( ()=> {
    fetchDonations();
  },[]);
  return (
    <div>ManageDonations</div>
  )
}

export default ManageDonations