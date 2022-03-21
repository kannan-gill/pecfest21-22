import Button from "../Utilities/Button";
import { Button as BootstrapButton } from "react-bootstrap";
import SimpleInput from "Components/Utilities/SimpleInput";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import styles from "./Login.module.css";
const ForgotPassword = ({ setOpenForgotPasswordUI }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);
  const [sendMailLoader, setSendMailLoader] = useState(false);
  const forgotPasswordHandler = () => {
    setIsMailSent(false);
    setSendMailLoader(true);
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsMailSent(true);
        setSendMailLoader(false);
        setEmail('');
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        setSendMailLoader(false);
        toast.error("Unable to send email");
        console.log(error, email);
        // ..
      });
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div
        className="text-center text-uppercase fs-1 my-3 text-white"
        style={{ fontFamily: "'Audiowide', serif" }}
      >
        FORGOT PASSWORD
      </div>
      <form className="h-auto mh-100 mt-3 overflow-auto">
        <div className={`w-100 d-flex flex-column align-items-center position-relative`}>
          <SimpleInput
            type="text"
            icon="at"
            placeholder="Email"
            name="email"
            val={email}
            changeFunc={(e,value) => {
              console.log(value);
              setEmail(value);
            }}
          />
          { isMailSent && <div className="position-absolute top-50 mt-3 text-white animate__animated animate__fadeIn fw-bold ">Mail sent to registered account</div>}
        </div>
        
        <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
          <Button
            onClickFunc={() => {
              forgotPasswordHandler();
            }}
            disabled={loading}
            type="button"
          >
            {loading ? (
              <Spinner
                className="mx-3"
                variant="light"
                size="sm"
                animation="border"
              />
            ) : (
              <>
            {sendMailLoader && <Spinner animation="border" className="me-2" variant="light" size="sm"/>}
              Reset Password</>
            )}
          </Button>
          <BootstrapButton
            variant="secondary"
            onClick={() => {
              setOpenForgotPasswordUI(false);
            }}
          >
            Back
          </BootstrapButton>
        </div>
      </form>
    </div>
  );
};
export default ForgotPassword;
