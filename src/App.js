import logo from './logo.svg';
import './App.css';
import HeroBanner from './Home/HeroBanner';
import States from './Home/States';
import Process from './Home/Process';
import UrgentNeeds from './Home/UrgentNeeds';
import Header from './Home/Header';
import Testimonials from './Home/Testimonials';
import TreatmentSupport from './Home/TreatmentSupport';
import DonorCTA from './Home/DonorCTA';
import Footer from './Home/Footer';

function App() {
  return (
    <div>
        <Header/>
     <HeroBanner/>
     <States/>
     <Process/> 
     <Testimonials/>
      <TreatmentSupport/>
     <UrgentNeeds/>
       <DonorCTA/>
       <Footer/>
    </div>
  );
}

export default App;
