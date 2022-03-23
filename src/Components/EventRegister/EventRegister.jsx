import React from "react";

const EventRegister = ({ event }) => {
  // TODO check user registered
  // if registered show already registered button
  // else show register button =>
  // check event type. teamBased or not
  // if not, simply register, add to user's Events
  // else show UI for team register (add people and stuff)
  
  return <div>{event.teamEvent ? "register Team!" : "register now!"}</div>;
};

export default EventRegister;
