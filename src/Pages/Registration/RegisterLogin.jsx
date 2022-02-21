import React from "react";
import styles from "./Register.module.css";
import { Container } from "react-bootstrap";
import LoginFlipCard from "../../Components/LoginFlipCard/LoginFlipCard";

function RegisterLogin({isRegister}) {
  return (
    <Container fluid className="p-0 m-0">
      <div
        style={{ backgroundImage: "url('../../Images/login_register_bg.jpg')" }}
        className={`vw-100 vh-100 ${styles.bg_img}`}
      >
        <LoginFlipCard isRegister={isRegister}/>
      </div>
    </Container>
  );
}

export default RegisterLogin;
