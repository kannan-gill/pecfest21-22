import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from "./Pages/Events/EventsList/EventList";
import PrivateRoutes from "./Components/PrivateRoutes";
import RegisterLogin from "./Pages/RegisterLogin/RegisterLogin";
import Home2 from "./Pages/Home/Home2";
import TeamEventRegistration from "./Pages/TeamEventRegistration/TeamEventRegistration";
import Developers from "Pages/Developers/Developers";
import Admin from "./Pages/Admin/Admin";
import ComingSoon from "Pages/ComingSoon/ComingSoon";
import Navbar from "Components/Navbar";
import ExternalLink from "Components/ExternalLink/ExternalLink";
import PageNotFound from "Pages/PageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
import ContactUs from "Pages/ContactUS/ContactUs";
import Team from "Pages/Team/Team";
import "react-toastify/dist/ReactToastify.css";
import Sponsors from "Pages/Sponsors/Sponsors";
import TechCulturalSelector from "Pages/Events/TechSelector/TechSelector";
import EventDetails from "Pages/EventCardDetails/EventDetails";
import AuthProvider from "./context/AuthContext";
import VerificationModalProvider from "./context/VerificationModalContext";
import VerifyEmail from "Pages/VerifyEmail";
import LazyAdmin from "Pages/LazyAdmin/LazyAdmin";
import Schedule from "Pages/Schedule/Schedule";

function App() {
  const [isNavBarVisible, setIsNavbarVisible] = useState(true);
  const [alwaysOpen, setAlwaysOpen] = useState(false);

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
    {
      path: "/verifyEmail/:userId",
      component: <VerifyEmail />,
    },
    {
      path: "/competitions",
      component: (
        <TechCulturalSelector
          technicalImageUrl="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/techSelectorImages%2FTechnical_final.jpg?alt=media"
          culturalImageUrl="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/techSelectorImages%2FCultural_final.jpg?alt=media"
          leftRoute="/tech-competitions"
          rightRoute="/cultural-competitions"
        />
      ),
    },
    { path: "/schedule", component: <Schedule /> },
    { path: "/admin", component: <Admin /> },
    { path: "/teamregister", component: <ComingSoon /> },
    { path: "/team", component: <Team /> },
    { path: "/aboutUs", component: <Home2 initialPage="aboutUs" /> },
    { path: "/sponsors", component: <Sponsors /> },
    {
      path: "/merchandise",
      component: <ExternalLink url={externalUrlLinks.merchandise} />,
    },
    { path: "/developer", component: <Developers /> },
    { path: "/contact", component: <ContactUs /> },
    {
      path: "/events",
      component: (
        <TechCulturalSelector
          technicalImageUrl="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/techSelectorImages%2Fmega.jpg?alt=media"
          culturalImageUrl="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/techSelectorImages%2Fpec%20talk.jpg?alt=media"
          leftName="Megashows"
          leftRoute="/megashows"
          rightRoute="/workshops"
          rightName="Events"
        />
      ),
    },
    {
      path: "/megashows",
      component: <EventList isTechnical={false} isCompetition={false} />,
    },
    {
      path: "/workshops",
      component: <EventList isTechnical isCompetition={false} />,
    },
    {
      path: "/lazyAdmin",
      component: <LazyAdmin/>,
    },
    { path: "/tech-competitions", component: <EventList isTechnical /> },
    {
      path: "/cultural-competitions",
      component: <EventList isTechnical={false} />,
    },
    {
      path: "*",
      component: <PageNotFound isNavbarVisible={setIsNavbarVisible} />,
    },
  ];
  const privateRoutes = [
    // add events to this
    {
      path: "/tech-competitions/:eventId",
      component: <EventDetails setAlwaysOpen={setAlwaysOpen} />,
    },
    {
      path: "/cultural-competitions/:eventId",
      component: <EventDetails setAlwaysOpen={setAlwaysOpen} />,
    },
    {
      path: "/workshops/:eventId",
      component: <EventDetails setAlwaysOpen={setAlwaysOpen} />,
    },
    {
      path: "/megashows/:eventId",
      component: <EventDetails setAlwaysOpen={setAlwaysOpen} />,
    },
  ];

  const privateRouteComponent = (route) => (
    <Route
      path={route.path}
      element={
        <PrivateRoutes setIsNavbarVisible={setIsNavbarVisible}>
          {route.component}
        </PrivateRoutes>
      }
      key={route.path}
    />
  );
  const publicRouteComponent = (route) => (
    <Route path={route.path} element={route.component} key={route.path} />
  );

  return (
    <div className="overflow-auto vh-100 bg-black">
      <ToastContainer theme="light" />
      <AuthProvider>
        <VerificationModalProvider>
          <BrowserRouter>
            {isNavBarVisible && <Navbar alwaysOpenOnLarge={alwaysOpen} />}
            <Routes>
              {publicRoutes.map((route) => publicRouteComponent(route))}
              {privateRoutes.map((route) => privateRouteComponent(route))}
            </Routes>
          </BrowserRouter>
        </VerificationModalProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
