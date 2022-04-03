import React from "react";
import StarsBg from "../../StarsBg";
import BottomBars from "../../BottomBars";
import Spacecraft from "../../Spacecraft";
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
          <img className={`m-4 ${styles.pfDates}`} src="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2Fpfdates.png?alt=media&token=bafe6b1e-a6d4-4ec7-a7c2-927ddac85cff" alt="pecfest dates" />
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
            src="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2FchandigarhHand.png?alt=media&token=af281e8f-6e31-49a2-9496-aaaa6d6811ac"
            alt="Open Hand Monument"
            className={styles.chandigarhHand}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2FaboutUsPlanet.png?alt=media&token=https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2FaboutUsPlanet.png?alt=media&token=33ddaacd-f97c-4a08-b67b-0ec4e16ac1f6"
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
