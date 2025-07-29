import React, { useState } from 'react'

const HopeCellForgotPassword = () => {
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/api/Auth/forgot-password`,{
                email,
            });
            setMessage("If your email exists, a reset link has been sent. Please check your inbox.");
            console.log("Reset link (for testing):", response.data.link);
            // backend already returning reset link
        }
        catch (error){
            console.error(error);
            setMessage("Something went wrong. Please try again")
        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <form
        onSubmit={handleSubmit}
        >

        </form>
    </div>
  )
}

export default HopeCellForgotPassword