import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorTooltip = ({title, classes}) => {
  return (
    <Tooltip title={title} placement="top" arrow>
      <InputGroup.Text className={classes}>
        <FontAwesomeIcon icon={faCircleExclamation} color="red" />
      </InputGroup.Text>
    </Tooltip>
  );
};

export default ErrorTooltip;
