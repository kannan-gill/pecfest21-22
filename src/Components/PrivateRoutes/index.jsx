import React, { useState, useEffect } from "react";
// being used to invoke the firebase config, DO NOT DELETE
import {} from "../../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import RegisterLogin from "../../Pages/RegisterLogin/RegisterLogin";

const PrivateRoutes = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const auth = getAuth();
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
      {!loading && (user ? props.children : <RegisterLogin />)}
    </>
  );
};

export default PrivateRoutes;
