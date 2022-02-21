import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import styles from "./Utilities.module.css";

const SimpleInput = ({ placeholder, icon, type, password = false, val, name, changeFunc }) => {
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
  } 

  return (
    <InputGroup className="mb-3 w-75">
      <InputGroup.Text>
        <i class={`fas fa-${icon} ${styles.icon_size}`} />
      </InputGroup.Text>
      <FormControl
        type={inputType}
        className={`${styles.no_border_right} ${styles.no_box_shadow}`}
        placeholder={placeholder}
        aria-label={name}
        onChange={changeHandler}
        value = {value}
        name = {name}
      />
      {password && focus && (
        <InputGroup.Text className="bg-white" onClick={passwordClickHandler}>
          <i
            class={inputType === "password" ? "fas fa-eye" : "fas fa-eye-slash"}
          ></i>
        </InputGroup.Text>
      )}
    </InputGroup>
  );
};

export default SimpleInput;
