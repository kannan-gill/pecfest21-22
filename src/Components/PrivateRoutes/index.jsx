import React, { useState, useEffect } from "react";
import { app } from "../../config";
// this will have admin authorisation and 2 options for admin, 1 to enter event (event id, name, organising society or people, description)
// and this will have option to fetch all people who registered for a particular event.
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = (props) => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const auth = getAuth();
    const cleanUp = onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUser(userRes);
      } else {
        setUser(null);
      }
    });
    return cleanUp;
  }, []);

  return (
    <>
      {" "}
      {user ? props.children : <Navigate to="/login" state={{ from: location }} />}
    </>
  );
};

export default PrivateRoutes;
