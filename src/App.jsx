import React, { useState } from "react";
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
import Team from "./Pages/Team/Team";
import Schedule from "Pages/Schedule/Schedule";
import ComingSoon from "Pages/ComingSoon/ComingSoon";
import Navbar from "Components/Navbar";
import { Link } from "react-router-dom";
import ExternalLink from "Components/ExternalLink/ExternalLink";
import PageNotFound from "Pages/PageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isNavBarVisible, setIsNavbarVisible] = useState(true);

  const externalUrlLinks = {
    merchandise: "https://pecfestmemories.co.in",
  };

  const publicRoutes = [
    { path: "/", component: <Home2 initialPage="landing" /> },
    {
      path: "/login",
      component: <RegisterLogin setIsNavbarVisible={setIsNavbarVisible} />,
    },
    {
      path: "/register",
      component: (
        <RegisterLogin isRegister setIsNavbarVisible={setIsNavbarVisible} />
      ),
    },
    { path: "/competitions", component: <ComingSoon /> },
    { path: "/schedule", component: <ComingSoon /> },
    { path: "/contactUs", component: <ComingSoon /> },
    { path: "/admin", component: <Admin /> },
    { path: "/teamregister", component: <ComingSoon /> },
    { path: "/team", component: <ComingSoon /> },
    { path: "/aboutUs", component: <Home2 initialPage="aboutUs" /> },
    { path: "/sponsors", component: <ComingSoon /> },
    {
      path: "/merchandise",
      component: <ExternalLink url={externalUrlLinks.merchandise} />,
    },
    { path: "/developer", component: <ComingSoon /> },
    { path: "/contact", component: <ComingSoon /> },  
    { path: "/events", component: <ComingSoon /> },
    { path: "*", component: <PageNotFound isNavbarVisible={setIsNavbarVisible}/> },
  ];
  const privateRoutes = [
    // add events to this
    { path: "/events", component: <ComingSoon /> },
  ];

  const privateRouteComponent = (route) => (
    <Route
      path={route.path}
      element={
        <PrivateRoutes setIsNavbarVisible={setIsNavbarVisible}>
          {route.component}
        </PrivateRoutes>
      }
    />
  );
  const publicRouteComponent = (route) => (
    <Route path={route.path} element={route.component} />
  );

  return (
    <div className="overflow-auto vh-100 bg-black">
      <ToastContainer theme="light" />
      <BrowserRouter>
        {isNavBarVisible && <Navbar />}
        <Routes>
          {publicRoutes.map((route) => publicRouteComponent(route))}
          {privateRoutes.map((route) => privateRouteComponent(route))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
