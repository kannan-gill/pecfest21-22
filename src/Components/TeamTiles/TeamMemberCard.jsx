import React from "react";
import Image from "react-bootstrap/Image";
import { Instagram, Linkedin, Phone } from "react-bootstrap-icons";
import styles from "./TeamMemberCard.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function TeamMemberCard({member , index}) {

  const lineColors = ["red", "green", "blue", "yellow"];
  const color = lineColors[index % 4];

  return (
    <div
      className={`m-4 ${styles.membertile} d-flex flex-column justify-content-center align-items-center`}
    >
      <Image
        className={`${styles.memberimage}`}
        roundedCircle
        src={member.image}  
      ></Image>
      <div className="mt-3" style={{ fontSize: "25px" }}>
        {member.name}
      </div>
      <hr
        className={`${styles.detailsSeparator}`}
        style={{ height: "3px", backgroundColor: color }}
      ></hr>
      <div className="text-center" style={{ fontSize: "20px" }}>{member.position}</div>
      <div className="d-flex flex-row justify-content-center align-items-center w-50 m-auto mt-3">
        {member.instagram!=="" && <a href={member.instagram} target="_blank">
          <Instagram className={`fa fa-lg me-3 ${styles.instagram}`} />
        </a>}

        {member.number!=="" && <OverlayTrigger
          placement="bottom"
          delay={{ show: 150, hide: 200 }}
          overlay={
            <Tooltip className={`${styles.tooltipdesign}`}>
              {member.number}
            </Tooltip>
          }
        >
          <a>
            <Phone className={`fa fa-lg me-3 ${styles.phone}`} />
          </a>
        </OverlayTrigger>}
        {member.linkedin!=="" && <a href={member.linkedin} target="_blank">
          <Linkedin className={`fa fa-lg ${styles.linkedin}`} />
        </a>}
      </div>
    </div>
  );
}

export default TeamMemberCard;
