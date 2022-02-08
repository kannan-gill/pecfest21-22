import React, { useState } from "react";

// this page opens only if
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [user, editUser] = useState({
    name: "",
    college: "",
    email: "",
    phone: "",
    year: "",
    gender: "",
    password: "default",
    // TODO please add a password field....
  });

  function appendUser() {
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/events");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    // store this user in db and redirect to events page
  }

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={(e) => editUser({ ...user, name: e.target.value })}
          ></input>
        </div>
        <div>
          <label>College</label>
          <input
            type="text"
            name="college"
            placeholder="College"
            value={user.college}
            onChange={(e) => editUser({ ...user, college: e.target.value })}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => editUser({ ...user, email: e.target.value })}
          ></input>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone number"
            placeholder="Phone Number"
            value={user.phone}
            onChange={(e) => editUser({ ...user, phone: e.target.value })}
          ></input>
        </div>

        <button
          type="button"
          className="btn btn-primary m-3 my-button"
          onClick={(e) => appendUser(e)}
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default Register;

// add a radio button here for gender
// add a dropdown or something to get year of person like 1st year, 2nd year etc.
