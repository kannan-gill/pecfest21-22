import React from 'react';
import "./App.css";
// import Button from "./Components/Utilities/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from "./Pages/Events/EventList";
// import Home from "./Pages/Home/Home";
import PrivateRoutes from "./Components/PrivateRoutes";
import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";
import Home2 from "./Pages/Home/Home2";
import LandingPage from "./Pages/CampusTour/LandingPage";
import Competitions from "./Pages/Competitions/Competitions";
import TeamEventRegistration from "./Pages/TeamEventRegistration/TeamEventRegistration";
// import ContactUs from "./Pages/ContactUS/ContactUs";
// import Developers from "./Pages/Developers/Developers";
import Admin from "./Pages/Admin/Admin";
import Team from './Pages/Team/Team';
import Schedule from 'Pages/Schedule/Schedule';
import LoadingDumb from 'Components/Loading/LoadingDumb'
import ComingSoon from 'Components/ComingSoon/ComingSoon'

function App() {
  const publicRoutes = [
    { path: "/", component: <Home2 /> },
    { path: "/login", component: <RegisterLogin /> },
    { path: "/register", component: <RegisterLogin isRegister/> },
    // { path: "/campusTour", component: <LandingPage /> },
    { path: "/competitions", component:  <ComingSoon /> },
    { path: "/schedule", component: <ComingSoon /> },
    // { path: "/developers", component: <Developers /> },
    { path: "/contactUs", component: <ComingSoon /> },
    { path: "/admin", component: <Admin /> },
    { path: "/teamregister", component:  <ComingSoon /> },
    { path: "/team", component: <ComingSoon />},
    { path: "/aboutUs", component: <ComingSoon />},
    { path: "/sponsors", component: <ComingSoon />},
    { path: "/merchandise", component: <ComingSoon />},
    { path: "/brochure", component: <ComingSoon />},
    { path: "/developer", component: <ComingSoon />},
    { path: "/contact", component: <ComingSoon />}
    
  ];
  const privateRoutes = [{ path: "/events", component: <ComingSoon /> }];

  const privateRouteComponent = (route) => (
    <Route
      path={route.path}
      element={<PrivateRoutes>{route.component}</PrivateRoutes>}
    />
  );
  const publicRouteComponent = (route) => (
    <Route path={route.path} element={route.component} />
  );
  return (
    <div className="overflow-hidden vh-100 bg-dark">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route) => publicRouteComponent(route))}
          {privateRoutes.map((route) => privateRouteComponent(route))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
