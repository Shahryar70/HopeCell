import logo from './logo.svg';
import './App.css';
import HeroBanner from './Home/HeroBanner';
import States from './Home/States';
import Process from './Home/Process';
import UrgentNeeds from './Home/UrgentNeeds';
import Header from './Home/Header';
import Testimonials from './Home/Testimonials';
import TreatmentSupport from './Home/TreatmentSupport';

function App() {
  return (
    <div>
        <Header/>
     <HeroBanner/>
     <States/>
     <Process/>
     <UrgentNeeds/>
     <Testimonials/>
     <TreatmentSupport/>
    </div>
  );
}

export default App;
