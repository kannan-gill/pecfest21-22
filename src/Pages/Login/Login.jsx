import React, { useState } from "react";
import {} from "../../config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SimpleInput from "../../Components/Utilities/SimpleInput";

function Login() {
  const [login, setlogin] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

  return (
    <div>
      {/* <label>Pecfest Email</label> */}
      {/* <img src="" className='img-fluid shadow-4' alt='...' /> */}
      <SimpleInput type='email' placeholder='Email' icon="envelope" />
      <SimpleInput type='password' placeholder='Password' icon="key" />

      
      <button type="button" onClick={(e) => handleSubmit(e)}>
        Login
      </button>
    </div>
  );
}
export default Login;
