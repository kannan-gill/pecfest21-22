import React from "react";
import styles from "./Sponsors.module.css";

const SponsorCard = ({ image, name, desc,index }) => {
  return (
    <div
      className={`d-flex flex-column justify-content-end py-3 align-items-center me-4 mb-4 animate__animated animate__fadeIn ${styles.card} ${index%2==0 ? styles.rightrotate : styles.leftrotate}`}
    >
      <div className="h-50 d-flex flex-row justify-content-center m-auto">
        <img style={{height:"120px",width:"140px"}}
          src={image}
          alt="sponsor_image"
          className="align-self-center"
        />
      </div>
      <div className={`text-dark text-center w-100 ${styles.sponsor_name}`}>
        {name}
      </div>
      <div
          className={`m-2 w-50 ${styles.cardLine}`}
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
