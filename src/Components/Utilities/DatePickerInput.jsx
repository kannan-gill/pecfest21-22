import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import styles from "./Utilities.module.css";
import ErrorTooltip from "./ErrorTooltip";

const errorMessages = {
  dob: "Please enter a valid date",
};

const DatePickerInput = ({ label, icon, isValid, name, changeFunc, val }) => {
  const changeHandler = (e) => {
    changeFunc(name, e.target.value);
  };

  return (
    <InputGroup className="mb-3 w-75">
      <InputGroup.Text>
        <i className={`fas fa-${icon} ${styles.icon_size}`} />
      </InputGroup.Text>
      <FormControl
        onChange={changeHandler}
        type="date"
        value={val}
        placeholder="Date of Birth"
        aria-label={label}
        className={styles.no_box_shadow}
        max={new Date().toISOString().split("T")[0]}
        min="1900-01-01"
      />

      {!isValid ? (
        <ErrorTooltip title={errorMessages[name]} classes="bg-white" />
      ) : null}
    </InputGroup>
  );
};

export default DatePickerInput;
