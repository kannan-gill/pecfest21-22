import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styles from "./Utilities.module.css";
import ErrorTooltip from "./ErrorTooltip";

const errorMessages = {
  gender: "Please select a gender",
  degree: "Please select a degree",
  year: "Please select a year"
}

function SelectInput({ label, disabledOption, options, icon, changeFunc, name, isValid, val }) {
  // const [selectedVal, setSelectedVal]  = useState({
  //   val: val
  // });

  const changeHandler = (e) => {
    // setSelectedVal((prevState) => {return { ...prevState, val: e.target.value}});
    changeFunc(name, e.target.value);
  }

  return (
    <InputGroup className="mb-3 w-75">
      <InputGroup.Text>
        <i className={`fas fa-${icon} ${styles.icon_size}`} />
      </InputGroup.Text>
      <Form.Select aria-label={label} className={styles.no_box_shadow} onChange={changeHandler} value={val === "" ? disabledOption : val} >
        <option value={disabledOption} disabled>
          {disabledOption}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>

      {!isValid ? (
        <ErrorTooltip title={errorMessages[name]} />
      ) : null}

    </InputGroup>
  );
}

export default SelectInput;
