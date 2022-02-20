import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Button({ btnClasses, iconClasses, clickHandler, icon, text, type }) {
  return (
    <MDBBtn color="warning" className={btnClasses} rounded="true" type={type}>
      {text}
      <MDBIcon
        className={`${iconClasses} ms-2`}
        fas
        icon={icon}
        onClick={clickHandler}
      />
    </MDBBtn>
  );
}

export default Button;
  