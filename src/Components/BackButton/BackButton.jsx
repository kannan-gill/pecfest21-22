import React from "react";
import styles from "./BackButton.module.css"

function BackButton({classes, clickHandler}) {
  return (
    <button class={`${styles.btn} ${classes}`} onClick={clickHandler}>
      <span class={styles.circle} aria-hidden="true">
        <span class={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span class={`${styles.button_text} ${styles.btn_display}`}>Home</span>
    </button>
  );
}

export default BackButton;
