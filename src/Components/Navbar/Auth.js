import React, { useEffect, useState } from "react";
import {} from "../../config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config";

//navbar topics: pecfest logo, campus tour, contact us, developers, events, competitions, live stage page where streaming will be going on
// in case someone cant find streaming from campus tour he can refer this.

function Navbar() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const logoutUserHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
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
