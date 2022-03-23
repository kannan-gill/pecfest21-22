import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";

const LoginWrapper = ({ onFlip, redirect }) => {
  const [openForgotPasswordUI, setOpenForgotPasswordUI] = useState(false);
  return openForgotPasswordUI ? (
    <ForgotPassword setOpenForgotPasswordUI={setOpenForgotPasswordUI}/>
  ) : (
    <Login redirect={redirect} onFlip={onFlip} setOpenForgotPasswordUI={setOpenForgotPasswordUI} />
  );
};
export default LoginWrapper;