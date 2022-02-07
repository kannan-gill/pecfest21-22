import "./App.css";
import LandingPage from "./Pages/CampusTour/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from "./Pages/Events/EventList";
import Competitions from "./Pages/Competitions/Competitions";
import TeamRegister from "./Pages/Registration/TeamRegister";
import ContactUs from "./Pages/ContactUS/ContactUs";
import Developers from "./Pages/Developers/Developers";
import Admin from "./Pages/Admin/Admin";
import PrivateRoutes from "./Components/PrivateRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />s
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/events"
            element={
              <PrivateRoutes>
                <EventList />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
