import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Button({ btnClasses, iconClasses, clickHandler, icon, text, type }) {
  return (
    <MDBBtn className={btnClasses} rounded="true" type={type}>
      <MDBIcon
        className={`${iconClasses} me-2`}
        fab
        icon={icon}
        onClick={clickHandler}
      />
      {text}
    </MDBBtn>
  );
}

export default Button;
