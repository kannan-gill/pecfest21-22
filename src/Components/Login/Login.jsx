import React, { useState } from "react";
import {} from "../../config";
import { Form } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SimpleInput from "../Utilities/SimpleInput";
import styles from "./Login.module.css";
import Button from "../Utilities/Button";

function Login({ onFlip }) {
  const initialLoginState = {email: "", password: "", rememberMe: false};
  const [{email, password, rememberMe}, setlogin] = useState(initialLoginState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, rememberMe);
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, login.email, login.password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage);
    //     // ..
    //   });
    // setlogin(() => {return {...initialLoginState}});
    // console.log(email, password, rememberMe);
  }

  const changeHandler = (name, value) => {  
    setlogin((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <>
      <div
        className="text-center text-uppercase fs-1 my-3 text-white"
        style={{ "font-family": "'Audiowide', serif" }}
      >
        LOGIN
      </div>
      <form onSubmit={handleSubmit} className="h-auto mh-75 mt-3 overflow-hidden">
        <div
          className={`w-100 d-flex flex-column align-items-center ${styles.overflow_auto}`}
        >
          <SimpleInput
            type="text"
            icon="at"
            placeholder="Email"
            name="email"
            val={email}
            changeFunc={changeHandler}
          />
          <SimpleInput
            type="password"
            name="password"
            password="true"
            icon="key"
            placeholder="Password"
            val={password}  
            changeFunc={changeHandler}
          />
          <div
            className={`d-flex flex-row align-self-start justify-content-between w-75 flex-wrap ${styles.div_login} ${styles.color_text}`}
          >
            <Form.Check
              className={`${styles.color_text} mt-1`}
              type="checkbox"
              label="Remember me"
              name="rememberMe"
              checked={rememberMe}
              onChange={() => {
                setlogin((prevState) => {
                  return { ...prevState, rememberMe: !prevState.rememberMe };
                });
              }}  
            />
            <div className="mt-1">Forgot password?</div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center my-3">
          <Button type="submit" onClickFunc={() => {}}>LOGIN</Button>
          <div className={`${styles.color_text} mb-3`}>
            Dont Have an account yet!{" "}
            <span
              onClick={onFlip}
              className={`${styles.color_fadeblue} fw-bold text-decoration-underline`}
            >
              SIGN UP
            </span>
          </div>
        </div>
      </form>
    </>
  );
}
export default Login;
