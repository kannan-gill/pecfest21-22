import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const DatePickerInput = ({ label, icon }) => {
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
          <i class={`fas fa-${icon}`} />
        </InputGroup.Text>
      )}
      <FormControl
        onFocus={focusHandler}
        onBlur={blurHandler}
        type="text"
        placeholder="Date of Birth"
        aria-label={label}
      />
    </InputGroup>
  );
};

export default DatePickerInput;
