import React from "react";
import {
  MDBIcon,
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
} from "mdb-react-ui-kit";

const InputGroup = (props) => {
  return (
    <MDBInputGroup noWrap className="p-2 w-75">
      <MDBInputGroupText>
        <MDBIcon fas icon={props.icon} className="text-dark" />
      </MDBInputGroupText>
      <MDBInputGroupElement type={props.type} placeholder={props.placeholder} />
    </MDBInputGroup>
  );
};

export default InputGroup;
