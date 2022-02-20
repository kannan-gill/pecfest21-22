import React, { useState } from "react";

// this page opens only if
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {} from "../../config";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [user, editUser] = useState({
    name: "",
    college: "",
    email: "",
    phone: "",
    degree:"",
    year: "",
    gender: "",
    password: "default",
    isVerified:false,
    // TODO please add a password field....
  });

  function handleChange(e){
    editUser({...user, [e.target.name]:e.target.value})
  }

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
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>College</label>
          <input
            type="text"
            name="college"
            placeholder="College"
            value={user.college}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
          ></input>
        </div>
        <div>
        <label>Password</label>
          <input value={user.password} onChange={handleChange} type="password" name="password"/>
        </div>
        <div>
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={user.degree}
            onChange={handleChange}
          ></input>
        </div>
        <div onChange={handleChange}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        <div onChange={handleChange}>
          <input type="radio" value="First" name="year" /> First
          <input type="radio" value="Second" name="year" /> Second
          <input type="radio" value="Third" name="year" /> Third
          <input type="radio" value="Fourth" name="year" /> Fourth
          <input type="radio" value="Fifth" name="year" /> Fifth
        </div>
        

        <button
          type="button"
          className="btn btn-primary m-3 my-button"
          onClick={(e) => appendUser(e)}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

// add a radio button here for gender
// add a dropdown or something to get year of person like 1st year, 2nd year etc.
