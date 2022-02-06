import React from 'react';

function Competition(props) {

    function handleRegisterTeam(){
        // redirect to login page using auth then team register page, pass maxUsers, teamEvent to register page
    }

    function handleRegisterSelf(){
        // redirect to login page using auth then register page, pass maxUsers, teamEvent to register page
    }

  return <div>
      <div>name:{props.name}</div>
      <div>description:{props.desc}</div>
      {props.teamEvent ? <button onClick={e=>handleRegisterTeam(e)}>Register Team</button> : <button onClick={e=>handleRegisterSelf(e)}>Register Yourself</button>}
  </div>;
}

export default Competition;

