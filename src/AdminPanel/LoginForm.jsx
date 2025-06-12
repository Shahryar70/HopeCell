import { BiUser, BiLock } from 'react-icons/bi';
import React from 'react';
function LoginForm({ onSubmit }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login to HopeCell</h2>

        <div className="flex items-center border border-gray-300 rounded p-2">
          <BiUser className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded p-2">
          <BiLock className="text-gray-500 mr-2" />
       <input
  type="password"
  placeholder="Password"
  required
  autoComplete="current-password"
  className="outline-none w-full"
/>

        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
