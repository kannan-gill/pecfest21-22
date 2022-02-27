import React, { useEffect, useState } from "react";
import {} from "../../config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

//navbar topics: pecfest logo, campus tour, contact us, developers, events, competitions, live stage page where streaming will be going on
// in case someone cant find streaming from campus tour he can refer this.

function Navbar() {
  const auth = getAuth();
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const logoutUserHandler = () => {
    console.log("clicked");
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const cleanUp = onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setLoggedInStatus(true);
      } else {
        setLoggedInStatus(false);
      }
    });
    return cleanUp;
  }, []);

  return (
    loggedInStatus && (
      <button
        style={{
          position: "fixed",
          zIndex: 10,
        }}
        type="button"
        onClick={logoutUserHandler}
      >
        logout
      </button>
    )
  );
}

export default Navbar;
