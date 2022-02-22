import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import styles from "./Utilities.module.css";
import ErrorTooltip from "./ErrorTooltip";

const errorMessages = {
  date: "Please enter a valid date"
};

const DatePickerInput = ({ label, icon, isValid, name, changeFunc }) => {
  const [textType, setTextType] = useState(true);

  const focusHandler = (e) => {
    e.currentTarget.type = "date";
    setTextType(false);
  };

  const blurHandler = (e) => {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Date of Birth";
    setTextType(true);
  };

  return (
    <InputGroup className="mb-3 w-75">
      {textType && (
        <InputGroup.Text>
          <i className={`fas fa-${icon} ${styles.icon_size}`} />
        </InputGroup.Text>
      )}
      <FormControl
        onFocus={focusHandler}
        onBlur={blurHandler}
        type="text"
        placeholder="Date of Birth"
        aria-label={label}
        className={styles.no_box_shadow}
      />

      {!isValid ? (
        <ErrorTooltip title={errorMessages[name]} />
      ) : null}

    </InputGroup>
  );
};

export default DatePickerInput;
