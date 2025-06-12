import React from 'react';
import LoginPage from './AdminPanel/LoginPage';
import './App.css';
import HomePagesCall from './HomePagesCall';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePagesCall />} />
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
