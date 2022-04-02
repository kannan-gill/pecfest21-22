import React, {useState, useContext} from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import styles from "./UserDropdown.module.css"; 
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const PecfestId = ({color, iconColor}) => {
  const authContext = useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const copyButton = (
    <Button
      className={styles.copy_icon}
      style={{backgroundColor: iconColor, color: color}}
      onClick={() => {
        setShowTooltip(true);
        navigator.clipboard.writeText(authContext["pecfestId"]);
        setTimeout(() => setShowTooltip(false), 1000);
      }}

    >
      <FontAwesomeIcon icon={faCopy} />
    </Button>
  );

  return (
    <>
    {authContext && <>
      <div className="pe-2 fst-italic" style={{color: color}}>{authContext["pecfestId"]}</div>
      {showTooltip ? (
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Copied!</Tooltip>}>
          {copyButton}
        </OverlayTrigger>
      ) : (
        copyButton
      )}</>}
    </>
  );
};

export default PecfestId;
