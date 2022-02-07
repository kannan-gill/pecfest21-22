import React, { useState } from "react";
import Event from "./Event";
function EventList() {
  const [eventDetails, seteventDetails] = useState([]);

  return (
    <div>
      hi
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
