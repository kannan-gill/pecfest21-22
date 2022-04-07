import React, { useState, useContext } from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import styles from "./UserDropdown.module.css";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const PecfestId = ({ color, iconColor }) => {
  const { user: authContext } = useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const copyButton = (
    <Button
      className={styles.copy_icon}
      style={{ backgroundColor: iconColor, color: color }}
      onClick={() => {
        setShowTooltip(true);
        // if (navigator.clipboard && window.isSecureContext) {
        //   navigator.clipboard.writeText(authContext["pecfestId"]);
        // } else {
          var textArea = document.createElement("textarea");
          textArea.value = authContext["pecfestId"];
          textArea.style.position = "fixed"; 
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        // }
        setTimeout(() => setShowTooltip(false), 1000);
      }}
    >
      <FontAwesomeIcon icon={faCopy} />
    </Button>
  );

  return (
    <>
      {authContext && authContext.pecfestId && (
        <>
          <div className="pe-2 fst-italic" style={{ color: color }}>
            {authContext["pecfestId"]}
          </div>
          {showTooltip ? (
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Copied!</Tooltip>}
            >
              {copyButton}
            </OverlayTrigger>
          ) : (
            copyButton
          )}
        </>
      )}
    </>
  );
};

export default PecfestId;
