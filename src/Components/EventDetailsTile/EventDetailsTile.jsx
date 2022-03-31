import React from "react";
import { Button } from "react-bootstrap";
import styles from "./EventDetailsTile.module.scss";
const EventDetailsTile = ({
  background,
  buttonText,
  buttonColor,
  buttonHandler,
  title,
  buttonDisabled = false,
  align = "start",
  children = null,
}) => {
  return (
    <div
      className={`${styles.tile} w-100`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className={`w-100 h-100 text-white d-flex flex-column py-4 px-4 align-items-${align} justify-content-center ${styles.overlay}`}
      >
        <h2 className=" main_font">{title}</h2>
        <div className={`${styles.grey_color} main_font overflow-auto`}>{children}</div>
        <div>
          <Button
            onClick={() => {
              if(!buttonDisabled)
                buttonHandler();
            }}
            variant={buttonColor}
            size="sm"
            disabled={buttonDisabled}
            className={`fw-bold px-3 py-2 mt-3 mb-2 ${styles.button}`}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsTile;
