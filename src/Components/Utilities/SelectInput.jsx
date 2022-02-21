import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function SelectInput({ label, disabledOption, options, icon }) {
  return (
    <InputGroup className="mb-3 w-75">
      <InputGroup.Text>
        <i class={`fas fa-${icon}`} />
      </InputGroup.Text>
      <Form.Select aria-label={label}>
        <option disabled selected>{disabledOption}</option>
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
