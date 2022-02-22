import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import styles from "./Utilities.module.css";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import ErrorTooltip from "./ErrorTooltip";

const errorMessages = {
  name: "Name must be between 2 and 50 characters",
  email: "Please enter a valid email",
  password: "Password must be atleast 8 characters long",
  college: "College name should be between 1 and 50 characters",
  phone: "Enter a valid phone number",
};

const SimpleInput = ({
  placeholder,
  icon,
  type,
  password = false,
  val,
  name,
  changeFunc,
  isValid,
}) => {
  const [inputType, setInputType] = useState(type);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(val);

  const passwordClickHandler = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  const changeHandler = (e) => {
    e.target.value.length === 0 ? setFocus(false) : setFocus(true);
    setValue(e.target.value);
    changeFunc(name, e.target.value);
  };

  return (
    <InputGroup className="mb-3 w-75">
      <InputGroup.Text>
        <i className={`fas fa-${icon} ${styles.icon_size}`} />
      </InputGroup.Text>
      <FormControl
        type={inputType}
        className={`${styles.no_border_right} ${styles.no_box_shadow}`}
        placeholder={placeholder}
        aria-label={name}
        onChange={changeHandler}
        value={value}
        name={name}
        required
      />

      {!isValid ? (
          <ErrorTooltip title={errorMessages[name]} />
        ) : null}

      {password && focus && (
        <InputGroup.Text className="bg-white" onClick={passwordClickHandler}>
          <i
            className={inputType === "password" ? "fas fa-eye" : "fas fa-eye-slash"}
          ></i>
        </InputGroup.Text>
      )}
    </InputGroup>
  );
};

export default SimpleInput;
