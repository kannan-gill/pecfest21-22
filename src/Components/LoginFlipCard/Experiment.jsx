import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Login from "../../Pages/Login/Login";
import styles from "./LoginFlipCard.module.css";

const Experiment = ({ children }) => {  
  const [toggleFlip, setToggleFlip] = useState(false);

  const flipHandler = (e) => {
    setToggleFlip((prevState) => !prevState);
  };

  return (
    <div className={`vh-100 vw-100 m-0 py-md-4 py-sm-0 d-flex flex-row justify-content-lg-end justify-content-md-center align-items-center`}>
      <Row
        className={`me-lg-5 m-0 h-100 col-lg-4 col-md-6 col-sm-12 col-12 position-relative ${
          styles.loginCard
        } ${toggleFlip ? styles.isFlipped : ""} `}
      >
         
          <Col
            className={`p-0 h-100 me-lg-5 z-index-2 rounded position-absolute ${styles.bgColorCard} ${styles.loginCardFace} ${styles.loginCardFaceFront}`}
            // style={{ backgroundColor: "#5dc3d34f" }}
          >
            <h1 onClick={flipHandler}>Login</h1>
          </Col>
        
          <Col
            className={`p-0 h-100 me-lg-5 z-index-2 rounded position-absolute ${styles.bgColorCard} ${styles.loginCardFace} ${styles.loginCardFaceBack}`}
            // style={{ backgroundColor: "#5dc3d34f" }}
          >
            <h1 onClick={flipHandler}>REGISTER!!</h1>
          </Col>
        
      </Row>
    </div>
  );
};

export default Experiment;
