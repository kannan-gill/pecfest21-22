import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import styles from "./Utilities.module.css";

function SelectInput({ label, disabledOption, options, icon }) {
  return (
    <InputGroup className="mb-3 w-75">
      <InputGroup.Text>
        <i class={`fas fa-${icon} ${styles.icon_size}`} />
      </InputGroup.Text>
      <Form.Select aria-label={label} className={styles.no_box_shadow}>
        <option disabled selected>
          {disabledOption}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  );
}

export default SelectInput;
