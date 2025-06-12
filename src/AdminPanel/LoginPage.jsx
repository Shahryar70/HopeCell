import React from 'react';
import LoginForm from './LoginForm'; // adjust path if needed
import Header from '../Home/Header';

function LoginPage() {
  const handleLogin = async ({ email, password }) => {
    try {
      const response = await fetch('https://localhost:7219/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // e.g., Login successful
        // Optionally: store token, redirect user, etc.
      } else {
        const error = await response.json();
        alert(error.message); // e.g., Invalid email or password
      }
    } catch (err) {
      console.error('Login failed:', err);
      alert('Something went wrong. Try again later.');
    }
  };

  return <>
  <Header/>
  <LoginForm onSubmit={handleLogin} />;</>
}

export default LoginPage;
