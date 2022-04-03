import React from "react";
import styles from "./Utilities.module.css";

function Button({ children, color = "", type, disabled = false, onClickFunc = (e) => {} }) {
  const clickHandler = (e) => {
    onClickFunc(e);
  };

  return (
    <div className={styles.buttonGroup}>
      <button
        disabled={disabled}
        type={type}
        onClick={clickHandler}
        className={`${styles[color]} ${styles.color} ${styles.btn}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
