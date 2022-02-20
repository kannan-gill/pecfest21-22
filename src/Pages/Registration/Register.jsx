import React, { useState } from "react";

// this page opens only if
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {} from "../../config";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import Button from "../../Components/Utilities/Button";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Register() {
  const navigate = useNavigate();
  const [user, editUser] = useState({
    name: "",
    college: "",
    email: "",
    phone: "",
    degree: "",
    year: "",
    gender: "",
    password: "default",
    isVerified: false,
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

  const submitHandler = (e) => {
    e.preventDefault();
    appendUser();
  }

  return (
    <MDBContainer fluid className="p-0 m-0">  
      <div
        style={{ backgroundImage: "url('../../Images/login_register_bg.jpg')" }}
        className={`vw-100 vh-100 ${styles.bg_img}`}
      >
        <MDBRow className="m-0 py-md-4 py-sm-0 vh-100 d-flex justify-content-lg-end justify-content-md-center align-items-center">
          <MDBCol
            className="p-0 h-100 me-lg-5 z-index-2 col-lg-4 col-md-6 col-sm-12 rounded"
            style={{ backgroundColor: "#5dc3d34f" }}
          >
            {/* <div className="text-center text-uppercase fs-1" style={{"font-family": "'Audiowide', serif", "color":"white"}}>REGISTER</div> */}
            <form onSubmit={submitHandler}>
              {/* <Button type="submit" text="Sign Up" icon="space-shuttle" btnClasses="fs-6"/> */}
            </form>
            {/* <form>    
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
              <div>
              <label>Password</label>
                <input value={user.password} onChange={(e)=>editUser({...user, password:e.target.value})} type="password" name="password"/>
              </div>
              <div>
                <label>Degree</label>
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={user.degree}
                  onChange={(e) => editUser({ ...user, degree: e.target.value })}
                ></input>
              </div>
              <div onChange={(e)=>editUser({...user, gender:e.target.value})}>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
              </div>
              <div onChange={(e)=>editUser({...user, year:e.target.value})}>
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
            </form> */}
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default Register;

// add a radio button here for gender
// add a dropdown or something to get year of person like 1st year, 2nd year etc.
