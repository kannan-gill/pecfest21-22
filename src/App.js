import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Events from './Components/Events';
import Competitions from './Components/Competitions';
import TeamRegister from './Components/TeamRegister';
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
