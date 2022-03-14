import React from "react";
import "../../index.css";
import { Container } from "react-bootstrap";
import LoginFlipCard from "../../Components/LoginFlipCard/LoginFlipCard";
import BackButton from "../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import BgImg from "../../Components/Utilities/BgImg";

function RegisterLogin({isRegister}) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/")
  }

  return (
    <Container fluid className="p-0 m-0 h-100">
      <BgImg url="../../Images/login_register_bg.jpg">
        <BackButton classes="position-absolute top-0 left-0 ms-3 mt-3" clickHandler={clickHandler}/>
        <LoginFlipCard isRegister={isRegister}/>
      </BgImg>
    </Container>
  );
}

export default RegisterLogin;
