import React from "react";
import styles from "./IconCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconCard = ({icon,url, title, desc}) => {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-start flex-wrap p-3">
      <FontAwesomeIcon
        icon={icon}
        className={`color_yellow p-3 ${styles.icon} me-3`}
      ></FontAwesomeIcon>
      <div className="d-flex flex-column">
        <div className={`main_font mb-2 fw-bold ${styles.grey} ${styles.title}`}>{title}</div>
        <a href={`${url}`} className="text-decoration-none"><div className={`text-white fst-italic ${styles.desc}`}>{desc}</div></a>
      </div>
    </div>
  );
};

export default IconCard;
