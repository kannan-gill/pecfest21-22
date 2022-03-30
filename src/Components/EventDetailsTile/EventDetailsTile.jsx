import React from "react";
import { Button } from "react-bootstrap";
import styles from "./EventDetailsTile.module.scss";
const EventDetailsTile = ({
  background,
  buttonText,
  buttonColor,
  buttonHandler,
  title,
  children,
}) => {
  return (
    <div
      className={`${styles.tile} w-100`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className={`w-100 h-100 text-white d-flex flex-column px-4 justify-content-center ${styles.overlay}`}
      >
        <h2>{title}</h2>
        <div className={styles.grey_color}>{children}</div>
        <div>
          <Button
            onClick={() => buttonHandler()}
            variant={buttonColor}
            size="sm"
            className={`fw-bold px-3 py-2 mt-3 ${styles.button}`}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsTile;
