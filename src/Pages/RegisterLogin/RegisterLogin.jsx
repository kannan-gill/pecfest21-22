import React from "react";
import styles from "./RegisterLogin.module.css";
import { Container } from "react-bootstrap";
import LoginFlipCard from "../../Components/LoginFlipCard/LoginFlipCard";
import BackButton from "../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import Navbar from "Components/Navbar";
import ComingSoon from "Components/ComingSoon/ComingSoon";

function RegisterLogin({isRegister = false}) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/")
  }

  return (
    <Container fluid className="p-0 m-0 h-100 animate__animated animate__fadeIn">
      <div
        style={{ backgroundImage: "url('../../Images/login_register_bg.jpg')" }}
        className={`vw-100 vh-100 ${styles.bg_img}`}
      >
        <Navbar/>
        <ComingSoon/>
        {/* <BackButton classes={styles.back_button} clickHandler={clickHandler}/>
        <LoginFlipCard isRegister={isRegister}/> */}
      </div>
    </Container>
  );
}

export default RegisterLogin;
