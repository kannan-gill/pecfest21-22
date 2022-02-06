import React,{useEffect, useState} from 'react';
import Event from './Event';

function Events() {

    const [eventDetails, seteventDetails] = useState([]);

    useEffect(()=>{
        //load events from firebase and store in react state
        
    },[])

  return <div>
      {eventDetails.map(element=>{
          return <Event id={element.id} name={element.name} desc={element.desc} maxUsers={element.maxUsers} teamEvent={element.teamEvent}/>
      })}
  </div>;
}

export default Events;
