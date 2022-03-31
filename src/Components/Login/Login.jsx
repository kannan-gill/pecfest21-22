import React, { useState } from "react";
import { auth } from "../../config";
import { Spinner } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import SimpleInput from "../Utilities/SimpleInput";
import styles from "./Login.module.css";
import Button from "../Utilities/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const initialLoginState = { email: "", password: "", rememberMe: false };

function Login({ onFlip, setOpenForgotPasswordUI, redirect = null }) {

  
  const [{ email, password, rememberMe }, setLogin] =
    useState(initialLoginState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, rememberMe);
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        // const user = userCredential.user;
        setLoading(false);
        // toast.info("Signed in succesfully");
        if (redirect) {
          navigate(redirect);
        } else {
          navigate("/");
        }

        // ...
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Sign in failed");
        // ..
      });
  }

  const signUpHandler = () => {
    onFlip();
    setLogin(initialLoginState);
  };

  const changeHandler = (name, value) => {
    setLogin((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div
        className="text-center text-uppercase fs-1 my-3 text-white"
        style={{ fontFamily: "'Audiowide', serif" }}
      >
        LOGIN
      </div>
      <form
        onSubmit={handleSubmit}
        className="h-auto mh-100 mt-3 overflow-auto"
      >
        <div className={`w-100 d-flex flex-column align-items-center`}>
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
            password
            icon="key"
            placeholder="Password"
            val={password}
            changeFunc={changeHandler}
          />
          <div
            className={`d-flex flex-row align-self-start justify-content-between w-75 flex-wrap ${styles.div_login} ${styles.color_text}`}
          >
            <div
              className="mt-1 mx-auto w-auto cursor-pointer"
              onClick={() => {
                setOpenForgotPasswordUI(true);
              }}
            >
              Forgot password?
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center my-3">
          <Button disabled={loading} type="submit">
            {loading ? (
              <Spinner
                className="mx-3"
                variant="light"
                size="sm"
                animation="border"
              />
            ) : (
              <>LOGIN</>
            )}
          </Button>
          <div className={`${styles.color_text} mb-3`}>
            Dont Have an account yet!{" "}
            <span
              onClick={signUpHandler}
              className={`${styles.color_fadeblue} fw-bold text-decoration-underline cursor-pointer`}
            >
              SIGN UP
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
