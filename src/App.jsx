import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from "./Pages/Events/EventList";
import Home from "./Pages/Home/Home";
import PrivateRoutes from "./Components/PrivateRoutes";
import LandingPage from "./Pages/CampusTour/LandingPage";
import Competitions from "./Pages/Competitions/Competitions";
import TeamEventRegistration from "./Pages/TeamEventRegistration/TeamEventRegistration";
import ContactUs from "./Pages/ContactUS/ContactUs";
import Developers from "./Pages/Developers/Developers";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registration/Register";
import Home2 from "./Pages/Home/Home2"

function App() {
  // TODO: update these routes
  const publicRoutes = [{ path: "/", component: <Home /> }];
  const privateRoutes = [{ path: "/events", component: <EventList /> }];

  const privateRouteComponent = (route) => (
    <Route
      path={route.path}
      element={<PrivateRoutes>{route.component}</PrivateRoutes>}
    />
  );
  const publicRouteComponent = (route) => (
    <Route
      path={route.path}
      element={route.component}
    />
  );
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
           <Route path="/campusTour" element={<LandingPage />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teamregister" element={<TeamEventRegistration />} />
          {publicRoutes.map((route) => publicRouteComponent(route))}
          {privateRoutes.map((route) => privateRouteComponent(route))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
