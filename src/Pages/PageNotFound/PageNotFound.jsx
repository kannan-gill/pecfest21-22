import React, { useEffect } from "react";
import StarsBg from "../../Components/StarsBg";
import error404 from "../../Images/404.png";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./PageNotFound.module.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = ({ isNavbarVisible }) => {
  useEffect(() => {
    isNavbarVisible(false);
    return () => {
      isNavbarVisible(true);
    };
  }, [isNavbarVisible]);

  const navigate = useNavigate();

  const returnHomeBtn = () => {
    navigate("/");
  };

  return (
    <div className="nebula-bg animate__animated animate__fadeIn vh-100 d-flex flex-column justify-content-center">
      <StarsBg />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src={error404}
          style={{ width: "20em" }}
          alt="Astronaut on planet"
        />
        <div className={`main_font mt-3 mb-1 display-6 ${styles.faded_yellow}`}>
          lost in space
        </div>
        <div className={`h-6 main_font text-lowercase text-center ${styles.faded_yellow}`}>
          You have reached the edge of the universe
        </div>
        <Button
          onClick={returnHomeBtn}
          className={`fw-bold my-4 mx-2 px-4 py-2`}
          variant="warning"
          style={{
            borderRadius: "5em",
          }}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className="me-2"
            size="1x"
          />
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
