import './App.css';
import LandingPage from './Components/CampusTour/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Events from './Components/Events/EventEvents';
import Competitions from './Components/Competitions/Competitions';
import TeamRegister from './Components/Registration/TeamRegister';
function App() {
  return (<div>
    <TeamRegister/>
    <Router>
      <Routes>
       <Route exact path = '/' component={LandingPage}/>
       <Route exact path = '/events' component={Events}/>
       <Route exact path = '/competitions' component={Competitions}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
