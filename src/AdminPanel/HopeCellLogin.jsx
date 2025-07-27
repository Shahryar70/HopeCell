import React, { use, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ correct import
const HopeCellLogin = () => {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate(); // ✅ correct usage
  const token = localStorage.getItem('token');
  axios.get(`${apiUrl}/api/Auth/admin-only`,{
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post(`${apiUrl}/api/Auth/login`, {
        email,
        password,
      });
      const {token, user } = response.data;
      // Saving the token and user info at the local storage
      localStorage.setItem('toke', token);
      localStorage.setItem('user', JSON.stringify(user));

      setMessage('Login successful');
      navigate('/admin'); // ✅ redirect to admin page
    } catch (error) {
      console.error('❌ Login error:', error);
      if (error.response && error.response.status === 401) {
        setMessage('Invalid email or password');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    }
  };
  return (
    <div className="min-h-screen flex">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">Sign In</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-700 mb-1">
                Email<span className="text-red-600 font-semibold">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="info@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 h-14 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xl font-medium text-gray-700 mb-1">
                Password<span className="text-red-600 font-semibold">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 text-lg font-bold bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
              Sign In
            </button>

            {message && (
              <p className="mt-4 text-center text-lg font-semibold text-red-600">{message}</p>
            )}
          </form>
        </div>
      </div>

      {/* Right Banner Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-teal-600 text-white">
        <div className="text-center px-10">
          <div className="text-5xl font-semibold mb-2">HopeCell</div>
          <p className="text-xl mt-4 font-bold">
            Supporting Blood Cancer Patients with Bone Marrow Matches and Funding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HopeCellLogin;
