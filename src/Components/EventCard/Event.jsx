import React, { useState } from "react";
import EventDetails from "../EventCardDetails/EventDetails";
import styles from './EventCard.module.scss';

function Event({ event }) {
  const [show, setShow] = useState(false);
  function handleRegisterTeam() {
    // redirect to login page using auth then team register page, pass maxUsers, teamEvent to register page
  }

  function handleRegisterSelf() {
    // redirect to login page using auth then register page, pass maxUsers, teamEvent to register page
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-3 animate__animated animate__fadeIn">
      <div className="card border-none w-100">
        <div className={`${styles.card_wrapper} border-none`}>
          <img className="card-img-top" src={event.img} alt="Card" />
        </div>

        <div className={`${styles.card_body_color} card-body w-100 position-absolute bottom-0 text-end`}>
          <EventDetails event={event} show={show} setShow={setShow} />
          <h5 className="card-title text-white">{event.name}</h5>
          <div
            className="btn btn-primary fw-bold"
            onClick={() => {
              setShow(true);
            }}
          >
            Details
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
