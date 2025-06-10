import logo from './logo.svg';
import './App.css';
import { Navbar } from './Home/Navbar';
import TopNavbar from './Home/TopNavbar';
import HeroBanner from './Home/HeroBanner';
import States from './Home/States';

function App() {
  return (
    <div>
           <TopNavbar/>
     <Navbar/>
     <HeroBanner/>
     <States/>
    </div>
  );
}

export default App;
