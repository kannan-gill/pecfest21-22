import React from "react";
import { Form } from "react-bootstrap";

function RadioInput({ name, options }) {
  return (
    <div className="mb-3">
      {options.map((option, index) => (
        <Form.Check key={index} inline label={option} name={name} type="radio" />
      ))}
    </div>
  );
}

export default RadioInput;
