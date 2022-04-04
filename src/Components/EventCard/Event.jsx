import React, { useState } from "react";
import { Button } from "react-bootstrap";
import LinesEllipsis from "react-lines-ellipsis";
import { useNavigate } from "react-router-dom";
import styles from "./EventCard.module.scss";

function Event({ event, isTechnical = true, isCompetition = true }) {
  const navigate = useNavigate();
  const openDetails = (id) => {
    if (isCompetition) {
      if (isTechnical) {
        navigate(`/tech-competitions/${id}`);
      } else {
        navigate(`/cultural-competitions/${id}`);
      }
    } else {
      if (isTechnical) {
        navigate(`/workshops/${id}`);
      } else {
        navigate(`/megashows/${id}`);
      }
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-3 animate__animated animate__fadeIn">
      <div
        onClick={() => {
          openDetails(event?.id);
        }}
        className={`card ${styles.card_hover} cursor-pointer border-none w-100 align-items-center w-100 d-flex flex-column positon-relative w-100 bg-transparent`}
      >
        <div
          className={`${styles.card_wrapper} w-100  ${styles.border_curved} overflow-hidden `}
        >
          <img className="card-img-top" src={event.img} alt="Card" />
        </div>
        <div className={`position-absolute bottom-0 text-white main_font w-100 px-2 ${styles.heading_container}`}>
          <h5 className="fw-bold ps-2">{event.name}</h5>
        </div>
        <div
          className={`${styles.description_container}  mx-0 w-100 pb-0 px-2 mt-0 py-0 mx-auto card-body position-absolute top-100 d-flex flex-column text-white`}
        >
          <div
            className={` zi-top h-100 fw-bold position-relative text-justify d-flex flex-column justify-content-center px-3  ${
              styles.border_curved
            } text-dark py-2 ${
              isTechnical ? styles.techincal_text : styles.cultural_text
            }`}
          >
            <LinesEllipsis
              text={event.desc}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
            <div
              className={`w-100 h-100 zi-top position-absolute top-0 start-0`}
            >
              <div className={`${styles.description_overlay} w-100 h-100 `} />
            </div>
          </div>
        </div>
        <div
          className={`positon-absolute  top-0 h-100 w-100 card-body d-flex flex-column m-0 p-0 overflow-hidden ${styles.border_curved}`}
        >
          <div
            className={`${styles.card_body_color} ${styles.border_curved} h-100 position-absolute top-0 start-0 w-100 mx-0 card-body d-flex flex-column text-white`}
          >
            <Button
              variant="primary"
              size="lg"
              className={`${
                styles.button
              } fw-bold ms-auto overflow-hidden mx-auto my-auto ${
                isTechnical ? styles.tech_colors : styles.cultural_colors
              }`}
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
