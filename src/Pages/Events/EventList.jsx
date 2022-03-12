import React, { useState } from "react";
import Event from "./Event";
import ComingSoon from "Pages/ComingSoon/ComingSoon";
import Navbar from "Components/Navbar";
function EventList() {
  const [eventDetails, seteventDetails] = useState([]);

  return (
    <div className="vh-100" style={{background:"#07202a"}}>
      {eventDetails.map((element) => {
        return (
          <Event
            id={element.id}
            name={element.name}
            desc={element.desc}
            maxUsers={element.maxUsers}
            teamEvent={element.teamEvent}
          />
        );
      })}
    </div>
  );
}

export default EventList;
