import React, { useState, useEffect } from "react";
// being used to invoke the firebase config, DO NOT DELETE
import {} from "../../config";
import { onAuthStateChanged } from "firebase/auth";
import RegisterLogin from "../../Pages/RegisterLogin/RegisterLogin";
import { useLocation } from "react-router-dom";
import { auth } from "../../config";

const PrivateRoutes = ({ children, setIsNavbarVisible }) => {
  console.log('received', setIsNavbarVisible);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUser(userRes);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return cleanUp;
  }, []);

  return (
    <>
      {/* TODO: Change to this login */}
      {!loading &&
        (user ? (
          children
        ) : (
          <RegisterLogin redirect={location?.pathname} setIsNavbarVisible={setIsNavbarVisible} />
        ))}
    </>
  );
};

export default PrivateRoutes;
