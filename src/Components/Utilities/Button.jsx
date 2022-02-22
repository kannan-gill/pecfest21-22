import React from "react";
import styles from "./Utilities.module.css";

function Button({ children, type, onClickFunc }) {
  const clickHandler = (e) => {
    onClickFunc(e);
  } 

  return (
    <div className={styles.buttonGroup}>
      <button
        type={type}
        onClick={clickHandler}
        className={`${styles.color} ${styles.btn}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
