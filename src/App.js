import logo from './logo.svg';
import './App.css';
import { Navbar } from './Home/Navbar';
import TopNavbar from './Home/TopNavbar';
import HeroBanner from './Home/HeroBanner';
import States from './Home/States';
import Process from './Home/Process';
import UrgentNeeds from './Home/UrgentNeeds';

function App() {
  return (
    <div>
           <TopNavbar/>
     <Navbar/>
     <HeroBanner/>
     <States/>
     <Process/>
     <UrgentNeeds/>
    </div>
  );
}

export default App;
