import React from "react";
import {
  InputGroup,
  FormControl,
} from "react-bootstrap";

const SimpleInput = ({placeholder, label, icon, type}) => {
  return (
    <InputGroup className="mb-3 w-75">
      <InputGroup.Text >
          <i class={`fas fa-${icon}`}/>
      </InputGroup.Text>
      <FormControl
        type={type}
        placeholder={placeholder}
        aria-label={label}
      />  
  </InputGroup>
  );
};

export default SimpleInput;
