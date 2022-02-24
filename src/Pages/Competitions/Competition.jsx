import React from 'react';

function Competition(props) {

    function handleRegisterTeam(){
        // redirect to login page using auth then team register page, pass maxUsers, teamEvent to register page
    }

    function handleRegisterSelf(){
        // redirect to login page using auth then register page, pass maxUsers, teamEvent to register page
    }

  return <div key={props.element.code}>
      <div>name:{props.element.name}</div>
      <div>description:{props.element.desc}</div>
      <div>Organising Club:{props.element.club}</div>
      <div>Type of Competition:{props.element.TypeOfComp}</div>
      <div>Max Members:{props.element.maxmembers}</div>
      {props.element.isOnline ? <div>Event mode is online <button>Upload file</button></div> : <></>}

      {props.element.TeamEvent ? <button onClick={e=>handleRegisterTeam(e)}>Register Team</button> : <button onClick={e=>handleRegisterSelf(e)}>Register Yourself</button>}
  </div>;
}

export default Competition;

