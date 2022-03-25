import React from "react";
import styles from "./Sponsors.module.css";

const SponsorCard = ({ image, name, desc }) => {
  return (
    <div
      className={`d-flex flex-column justify-content-end py-3 align-items-center me-4 mb-4 zi-top animate__animated animate__fadeIn ${styles.card}`}
    >
      <div className="h-50 d-flex flex-row justify-content-center m-auto">
        <img
          src={image}
          alt="sponsor_image"
          className="align-self-center h-100"
        />
      </div>
      <div className={`text-dark text-center ${styles.sponsor_name}`}>
        {name}
      </div>
      <div
          className={`m-2 w-75 ${styles.cardLine}`}
        ></div>
      <div
        className={`text-uppercase text-center ${styles.sponsor_desc}`}
      >
        {desc}
      </div>
    </div>
  );
};

export default SponsorCard;
