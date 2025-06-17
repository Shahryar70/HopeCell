import React from 'react';
import './App.css';
import HomePagesCall from './HomePagesCall';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HopeCellLogin from './AdminPanel/HopeCellLogin';
import AdminDashboard from './AdminPanel/AdminDashboard';
import ManageCases from './AdminPanel/ManageCases';
import ManageDonations from './AdminPanel/ManageDonations';
import ManageVolunteers from './AdminPanel/ManageVolunteers';
import DashboardHome from './AdminPanel/DashboardHome';
import { RegistrationPage } from './RegisterationLinks/RegistrationPage';
import { RegistrationSuccess } from './RegisterationLinks/RegistrationSuccess';
import DonationPage from './Donation/DonationPage';
import DonationSuccess from './Donation/DonationSuccess';
import About from './Pages/About';
import Support from './Pages/Support';

function App() {
  return (
    <div>
        <Router>
      <Routes>
         <Route path="/" element={<HomePagesCall />} />
         {/* Admin Panel Routes */}
        <Route path="/login" element={<HopeCellLogin />} />
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/dashboard' element={<DashboardHome/>}/>
        <Route path='/urgent-cases' element={<ManageCases/>}/>
        <Route path='/donations' element={<ManageDonations/>}/>
        <Route path='/volunteers' element={<ManageVolunteers/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/registration-success' element={<RegistrationSuccess/>}/>
          <Route path='/donate' element={<DonationPage/>}/>
          <Route path='/donation-success' element={<DonationSuccess/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/support' element={<Support/>}/> 
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
