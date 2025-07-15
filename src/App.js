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
import GetInvolved from './GetInvolved/GetInvolved';
import VolunteerFormPage from './GetInvolved/VolunteerFormPage';
import PartnerPage from './GetInvolved/PartnerPage';
import ApplicationForm from './Pages/ApplicationForm';
import SuccessPage from './Pages/SuccessPage';
import ManageDonors from './AdminPanel/ManageDonors';

function App() {
  return (
    <div>
        <Router>
      <Routes>
         <Route path="/" element={<HomePagesCall />} />
         <Route path='/get-involved' element={<GetInvolved/>}/>
                <Route path='/about' element={<About/>}/>
          <Route path='/support' element={<Support/>}/> 
          <Route path='/volunteer-page' element={<VolunteerFormPage/>}/>
          <Route path='/partner-us' element={<PartnerPage/>}/>
          <Route path="/get-support/application" element={<ApplicationForm/>}/>
        <Route path="/get-support/success" element={<SuccessPage />} />

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
          <Route path='donor-details' element={<ManageDonors/>}/>
   
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
