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
import ContactUs from "./Pages/ContactUS/ContactUs";
import Developers from "./Pages/Developers/Developers";
import Admin from "./Pages/Admin/Admin";
import Team from './Pages/Team/Team';

function App() {
  // TODO: update these routes
  const publicRoutes = [
    { path: "/", component: <Home2 /> },
    { path: "/login", component: <RegisterLogin /> },
    { path: "/register", component: <RegisterLogin isRegister="true"/> },
  ];
  const privateRoutes = [{ path: "/events", component: <EventList /> }];

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
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home2 />} /> */}
          <Route path="/campusTour" element={<LandingPage />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/teamregister" element={<TeamEventRegistration />} />
          <Route path="/team" element={<Team />} />
          {publicRoutes.map((route) => publicRouteComponent(route))}
          {privateRoutes.map((route) => privateRouteComponent(route))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
