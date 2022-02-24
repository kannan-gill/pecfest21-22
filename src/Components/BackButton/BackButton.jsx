import React from "react";
import styles from "./BackButton.module.css"

function BackButton({classes, clickHandler}) {
  return (
    <button className={`${styles.btn} ${classes}`} onClick={clickHandler}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span className={`${styles.button_text} ${styles.btn_display}`}>Home</span>
    </button>
  );
}

export default BackButton;
