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
  }
  }
  return (
 
  );
};

export default ManageVolunteers;
