import React, { useState } from 'react'

const HopeCellForgotPassword = () => {
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSubmir = async (e) =>{
        e.preventDefault();
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/api/Auth/forgot-password`)
        }
    }
  return (
    <div>HopeCellForgotPassword</div>
  )
}

export default HopeCellForgotPassword