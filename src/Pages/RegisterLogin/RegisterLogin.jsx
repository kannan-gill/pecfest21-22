import React, { useEffect } from "react";
import styles from "./RegisterLogin.module.css";
import { Container } from "react-bootstrap";
import LoginFlipCard from "../../Components/LoginFlipCard/LoginFlipCard";
import BackButton from "../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import Navbar from "Components/Navbar";
import ComingSoon from "Pages/ComingSoon/ComingSoon";

function RegisterLogin({ isRegister = false, setIsNavbarVisible }) {
  const navigate = useNavigate();
  useEffect(() => {
    setIsNavbarVisible(false);
    const setVisible = () => {
      setIsNavbarVisible(true);
    }
    return setVisible;
  }, []);
  const clickHandler = () => {
    navigate("/");
  };

  return (
    <Container
      fluid
      className="p-0 m-0 h-100 animate__animated animate__fadeIn"
    >
      <div
        style={{ backgroundImage: "url('../../Images/login_register_bg.jpg')" }}
        className={`vw-100 vh-100 ${styles.bg_img}`}
      >
        {/* <Navbar/> */}
        <BackButton classes={styles.back_button} clickHandler={clickHandler} />
        <LoginFlipCard isRegister={isRegister} />
      </div>
    </Container>
  );
}

export default RegisterLogin;
