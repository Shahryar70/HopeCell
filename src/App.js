import React, { useEffect, useState } from 'react';
import './App.css';
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePagesCall from './HomePagesCall';
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
import Partner from './AdminPanel/Partner';
import UrgentNeeds from './Home/UrgentNeeds';
import Loader from './Pages/Loader';

function App() {
  // const location = useLocation();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   // fake delay to show loader (adjust time as needed)
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, [location]);

  return (
    <div>
      {/* {loading && <Loader />} */}
      <Routes>
        <Route path="/" element={<HomePagesCall />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />} /> 
        <Route path='/volunteer-page' element={<VolunteerFormPage />} />
        <Route path='/partner-us' element={<PartnerPage />} />
        <Route path="/get-support/application" element={<ApplicationForm />} />
        <Route path="/get-support/success" element={<SuccessPage />} />
        <Route path='/urgent-support' element={<UrgentNeeds />} />
        
        {/* Admin Panel Routes */}
        <Route path="/login" element={<HopeCellLogin />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/dashboard' element={<DashboardHome />} />
        <Route path='/urgent-cases' element={<ManageCases />} />
        <Route path='/donations' element={<ManageDonations />} />
        <Route path='/volunteers' element={<ManageVolunteers />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/registration-success' element={<RegistrationSuccess />} />
        <Route path='/donate' element={<DonationPage />} />
        <Route path='/donation-success' element={<DonationSuccess />} />
        <Route path='donor-details' element={<ManageDonors />} />
        <Route path='/partner' element={<Partner />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
