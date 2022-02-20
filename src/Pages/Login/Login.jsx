import React, { useState } from "react";
import {} from "../../config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import InputGroup from "../../Components/Utilities/InputGroup";
import Button from "../../Components/Utilities/Button";

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
      <InputGroup type='email' placeholder='Email' icon="envelope" />
      <InputGroup type='password' placeholder='Password' icon="key" />
      <Button text="Login" type="button" clickHandler={handleSubmit} />

      {/* <label>Pecfest Email</label>
      <input
        type="text"
        name="email"
        value={login.email}
        onChange={(e) => setlogin({ ...login, email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={login.password}
        onChange={(e) => setlogin({ ...login, password: e.target.value })}
      /> */}
      {/* <button type="button" onClick={(e) => handleSubmit(e)}>
        Login
      </button> */}



    </div>
  );
}

export default Login;
