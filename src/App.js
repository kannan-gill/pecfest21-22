import './App.css';
import LandingPage from './Components/CampusTour/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Events from './Components/Events/Events';
import Competitions from './Components/Competitions/Competitions';
import TeamRegister from './Components/Registration/TeamRegister';
import ContactUs from './Components/ContactUS/ContactUs';
import Developers from './Components/Developers/Developers';
import Admin from './Components/Admin/Admin';

function App() {
  return (<div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
       <Route path = '/' element={<LandingPage/>}/>
       <Route path = '/events' element={<Events/>}/>
       <Route path = '/competitions' element={<Competitions/>}/>
       <Route path = '/developers' element={<Developers/>}/>
       <Route path = '/contactUs' element={<ContactUs/>}/>
       <Route path = '/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
