import React from "react";
import Image from "react-bootstrap/Image";
import { Instagram, Linkedin, Phone } from "react-bootstrap-icons";
import styles from "./TeamMemberCard.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function TeamMemberCard({member , index, isDeveloper=false}) {

  const lineColors = ["red", "green", "blue", "yellow"];
  const color = lineColors[index % 4];

  var namelist = member.name.split(" ");
  var imagesource = "https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/POR%20Images%2F"+namelist[0]+"%20"+namelist[1]+"?alt=media";
  

  return (
    <div
      className={`m-4 ${styles.membertile} d-flex flex-column align-items-center`}
    >
      <Image
        className={`${styles.memberimage}`}
        roundedCircle
        src={isDeveloper ? member.image : imagesource}  
      ></Image>
      <div className="mt-3" style={{ fontSize: "25px" }}>
        {member.name}
      </div>
      <hr
        className={`${styles.detailsSeparator}`}
        style={{ height: "3px", backgroundColor: color }}
      ></hr>
      <div style={{ fontSize: "20px" }}>{member.position}</div>
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
