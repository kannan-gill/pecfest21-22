import React, { useState } from "react";
import {} from "../../config";
import { Form } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SimpleInput from "../Utilities/SimpleInput";
import styles from "./Login.module.css";
import Button from "../Utilities/Button";

const initialLoginState = {email: "", password: "", rememberMe: false};

function Login({ onFlip }) {
  const [{email, password, rememberMe}, setLogin] = useState(initialLoginState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, rememberMe);
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
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
    setLogin(initialLoginState);
  }

  const signUpHandler = () => {
    onFlip();
    setLogin(initialLoginState);
  }

  const changeHandler = (name, value) => {  
    setLogin((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <>
      <div
        className="text-center text-uppercase fs-1 my-3 text-white"
        style={{ fontFamily : "'Audiowide', serif" }}
      >
        LOGIN
      </div>
      <form onSubmit={handleSubmit} className="h-auto mh-100 mt-3 overflow-auto">
        <div
          className={`w-100 d-flex flex-column align-items-center`}
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
                setLogin((prevState) => {
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
              onClick={signUpHandler}
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
