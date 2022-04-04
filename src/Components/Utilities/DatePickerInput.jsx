import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import styles from "./Utilities.module.css";
import ErrorTooltip from "./ErrorTooltip";

const errorMessages = {
  dob: "Please enter a valid date"
};

const DatePickerInput = ({ label, icon, isValid, name, changeFunc, val}) => {
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

  const changeHandler = (e) => {
    changeFunc(name, e.target.value);
  }

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
        onChange={changeHandler}
        type="text"
        value={val}
        placeholder="Date of Birth"
        aria-label={label}
        className={styles.no_box_shadow}
      />

      {!isValid ? (
        <ErrorTooltip title={errorMessages[name]} classes="bg-white" />
      ) : null}

    </InputGroup>
  );
};

export default DatePickerInput;
