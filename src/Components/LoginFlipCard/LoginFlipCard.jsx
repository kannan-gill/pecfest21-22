import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Login from "../../Pages/Login/Login";
import Register from "../Register/Register";
import styles from "./LoginFlipCard.module.css";
import { useNavigate  } from "react-router-dom";

const LoginFlipCard = ({ isRegister }) => {
  const [toggleFlip, setToggleFlip] = useState(isRegister);
  const navigate = useNavigate ();

  const RegisterFlipHandler = (e) => {
    setToggleFlip((prevState) => !prevState);
    navigate('/login');
  };

  const LoginFlipHandler = () => {
    setToggleFlip((prevState) => !prevState);
    navigate('/register');
  }

  return (
    <div className={`overflow-hidden vh-100 vw-100 m-0 py-md-4 py-sm-0 d-flex flex-row justify-content-lg-end justify-content-md-center align-items-center`}>
      <Row
        className={`me-lg-5 m-0 h-100 col-lg-4 col-md-6 col-sm-12 col-12 position-relative ${
          styles.loginCard
        } ${toggleFlip ? styles.isFlipped : ""} `}
      >
        
          <Col
            className={`mh-100 overflow-auto h-sm-100 p-0 me-lg-5 z-index-2 rounded position-absolute ${styles.bgColorCard} ${styles.loginCardFace} ${styles.loginCardFaceFront} ${styles.top_50}`}
          >
            <h1 onClick={LoginFlipHandler}>Login</h1>
          </Col>
        
          <Col
            className={`mh-100 overflow-auto p-0 me-lg-5 z-index-2 rounded position-absolute ${styles.bgColorCard} ${styles.loginCardFace} ${styles.loginCardFaceBack} ${styles.top_50}`}
          >
            <Register onFlip={RegisterFlipHandler}/>
          </Col>
        
      </Row>
    </div>
  );
};

export default LoginFlipCard;
