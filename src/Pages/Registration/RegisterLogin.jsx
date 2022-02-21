import React from "react";
import styles from "./RegisterLogin.module.css";
import { Container } from "react-bootstrap";
import LoginFlipCard from "../../Components/LoginFlipCard/LoginFlipCard";
import BackButton from "../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

function RegisterLogin({isRegister}) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/")
  }

  return (
    <Container fluid className="p-0 m-0 h-100">
      <div
        style={{ backgroundImage: "url('../../Images/login_register_bg.jpg')" }}
        className={`vw-100 vh-100 ${styles.bg_img}`}
      >
        <BackButton classes={styles.back_button} clickHandler={clickHandler}/>
        <LoginFlipCard isRegister={isRegister}/>
      </div>
    </Container>
  );
}

export default RegisterLogin;
