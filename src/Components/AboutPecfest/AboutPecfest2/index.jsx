import React from "react";
import StarsBg from "../../StarsBg";
import BottomBars from "../../BottomBars";
import Spacecraft from "../../Spacecraft";
import AboutUsPlanet from "../../../Images/aboutUsPlanet.png";
import chandigarhHand from "../../../Images/chandigarhHand.png";
import styles from "./AboutPecfest2.module.css";
import { useNavigate } from "react-router-dom";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPecfest2 = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white w-100 h-100 overflow-hidden position-relative">
      <StarsBg />
      <div
        className={`w-100 h-100 ${styles["content-container"]} overflow-auto d-flex flex-row align-items-center justify-content-between`}
      >
        <div
          className={`d-flex flex-column align-items-center ${styles.text_container}`}
        >
          <img className={`m-4 ${styles.pfDates}`} src="../../Images/pfdates.png" alt="pecfest dates" />
          <span className={`${styles.main_text} `}>
            Relish the centenary celebrations as we commemorate{" "}
            <span className="text-warning ">100 glorious years</span> of PEC at
            pecfest <span className="d-inline-block">21-22.</span>
          </span>
          <button type="button" onClick={() => navigate("/register")} className={`${styles.registration_button} cursor-pointer py-2 px-4 mt-4`}>
            Register now
            <FontAwesomeIcon  className="px-2" icon={faAngleDoubleRight}></FontAwesomeIcon>
          </button>
        </div>
        <div
          className={`${styles.imgPlanet} d-none d-md-flex flex-row align-items-center justify-content-end h-100`}
        >
          <img
            src={chandigarhHand}
            alt="Open Hand Monument"
            className={styles.chandigarhHand}
          />
          <img
            src={AboutUsPlanet}
            alt="Rotating Planet"
            className={styles.aboutUsPlanet}
          />
        </div>
      </div>
      <div
        className={`w-100 position-absolute bottom-0 start-0 ${styles["bars-container"]}`}
      >
        <BottomBars />
      </div>
      <div
        className={`d-none d-sm-flex position-absolute bottom-0 start-0 ${styles.spacecraft}`}
      >
        <Spacecraft />
      </div>
    </div>
  );
};

export default AboutPecfest2;
