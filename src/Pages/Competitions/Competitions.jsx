import React,{useState,useEffect} from 'react';
import Competition from './Competition'

function Competitions() {

    const [compDetails, setcompDetails] = useState([]);

    useEffect(()=>{
        //load events from firebase and store in react state
        
    },[])

  return <div>
      {compDetails.map(element=>{
          return <Competition id={element.id} name={element.name} desc={element.desc} maxUsers={element.maxUsers} teamEvent={element.teamEvent}/>
      })}
  </div>;
}

export default Competitions;
