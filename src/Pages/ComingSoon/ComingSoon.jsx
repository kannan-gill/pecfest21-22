import { letterSpacing } from "@mui/system";
import React from "react";
import { Button } from "react-bootstrap";
import Countdown from "react-countdown";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import StarsBg from '../../Components/StarsBg'
import Navbar from "Components/Navbar";

function ComingSoon() {
  const navigate = useNavigate();
  const backToHomeHandler = () => {
    navigate("/");
  };
  return (
    <div className="nebula-bg animate__animated animate__fadeIn vh-100">
      <StarsBg />
      <div
        className="d-flex position-absolute top-0 start-0 vw-100 flex-columnm flex-row align-items-center vh-100 zi-top"
        style={{
          backgroundColor: "#00000080",
        }}
      >
        <div className="col-12 col-md-5 offset-md-1 d-flex flex-column h-100 align-items-center justify-content-center">
          <img className="w-75" src="../../Images/pfdates.png" alt="none" />
          <h1
            className="d-none d-md-flex comingsoon text-white h1"
            style={{
              textShadow: "5px 5px 5px black",
              letterSpacing: "5px",
              fontSize: "40px",
              fontFamily: "audiowide",
            }}
          >
            Coming Soon
          </h1>

          <h3
            className="d-none d-md-flex text-white"
            style={{
              textShadow: "5px 5px 5px black",
              letterSpacing: "5px",
              fontSize: "30px",
              fontFamily: "audiowide",
            }}
          >
            <Countdown date={"2022-04-16T00:00:00"} />
          </h3>
          <h4
            className="d-flex d-md-none text-white comingsoon mt-5"
            style={{
              textShadow: "5px 5px 5px black",
              letterSpacing: "5px",
              fontFamily: "audiowide",
            }}
          >
            Coming Soon
          </h4>

          <h5
            className="d-flex d-md-none text-white mb-5"
            style={{
              textShadow: "5px 5px 5px black",
              letterSpacing: "5px",
              fontSize: "30px",
              fontFamily: "audiowide",
            }}
          >
            <Countdown date={"2022-04-16T00:00:00"} />
          </h5>
          <div>
            <Button
              variant="warning"
              className="d-none d-md-flex fw-bold px-5 py-2 m-4  align-items-center"
              style={{
                borderRadius: "5em",
              }}
              onClick={backToHomeHandler}
              size="lg"
            >
              <FontAwesomeIcon
                icon={faAnglesLeft}
                className="m-0 p-0 me-2 "
                color="black"
              />
              Back to home
            </Button>
            <Button
              variant="warning"
              className="d-flex d-md-none fw-bold px-3 py-1 m-0 mt-3 align-items-center"
              style={{
                borderRadius: "5em",
              }}
              onClick={backToHomeHandler}
              size="sm"
            >
              <FontAwesomeIcon
                icon={faAnglesLeft}
                className="m-0 p-0 me-2 "
                color="black"
              />
              Back to home
            </Button>
          </div>
        </div>
        <div className="d-none d-md-flex col-6 col-lg-4  h-100 flex-column justify-content-center align-items-start px-5">
          <img
            className="w-100"
            src="../../Images/logo-final-red.png"
            alt="none"
          />
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
