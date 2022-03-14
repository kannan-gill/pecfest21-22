import React from "react";
import StarsBg from "../../StarsBg";
import BottomBars from "../../BottomBars";
import Spacecraft from "../../Spacecraft";
import AboutUsPlanet from "../../../Images/aboutUsPlanet.png";
import chandigarhHand from "../../../Images/chandigarhHand.png";
import styles from "./AboutPecfest2.module.css";

const AboutPecfest2 = () => {
  return (
    <div className="text-white w-100 h-100 overflow-hidden position-relative">
      <StarsBg />
      <div
        className={`w-100 h-100 ${styles["content-container"]} d-flex flex-row align-items-center justify-content-between`}
      >
        <div
          className={`d-flex flex-column align-items-center ${styles.text_container}`}
        >
          <img className="w-40 m-4" src="../../Images/pfdates.png" alt="none" />
          <span className={`${styles.main_text} `}>
            Relish the centenary celebrations as we commemorate{" "}
            <span className="text-warning ">100 glorious years</span> of PEC at
            pecfest 21-22.
          </span>
          <span className={`${styles.registration_button} p-2 mt-5 mt-md-3`}>
            Registrations opening soon
          </span>
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
        className={`position-absolute bottom-0 start-0 ${styles.spacecraft}`}
      >
        <Spacecraft />
      </div>
    </div>
  );
};

export default AboutPecfest2;
