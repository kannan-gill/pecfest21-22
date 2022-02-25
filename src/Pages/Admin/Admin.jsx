import React,{useState} from 'react';

// this will have admin authorisation and 2 options for admin, 1 to enter event (event id, name, organising society or people, description)
// and this will have option to fetch all people who registered for a particular event.

// Store cultural and technical comps in separate buckets

// type of competition, cutltural technical
// code of competition
// single event or team event.
// if team event how many max members
// name of competition
// google drive link or upload button
// description of the competition
// organising club or team
// contact person number name 

function Admin() {
  
  const [competition, setCompetition] = useState({
    name: "",
    code: "",
    description: "",
    club: "",
    maxmembers:"",
    drivelink: "",
    CompCategory: "",
    TeamEvent: "",
    isOnline: "",
  });

  function handleChange(e){
    setCompetition({...competition, [e.target.name] : e.target.value})
  }

  function appendCompetition(){

  }

  return <div>
    <form>
        <div>
          <label>Name Of competition</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={competition.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Code of competition</label>
          <input
            type="text"
            name="code"
            placeholder="Code of competition"
            value={competition.code}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Description of the competiton</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={competition.description}
            onChange={handleChange}
          ></input>
        </div>
        
        <div>
          <label>Organising Club</label>
          <input
            type="text"
            name="club"
            placeholder="Club"
            value={competition.club}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Maximum members</label>
          <input
            type="text"
            name="members"
            placeholder="Max. Members"
            value={competition.maxmembers}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Drive Link</label>
          <input
            type="text"
            name="drivelink"
            placeholder="Drive link"
            value={competition.drivelink}
            onChange={handleChange}
          ></input>
        </div>
        <div onChange={handleChange}>
          <input type="radio" value="Technical" name="CompCategory" /> Technical
          <input type="radio" value="Cultural" name="CompCategory" /> Cultural
        </div>
        <div onChange={handleChange}>
          <input type="radio" value="Online" name="isOnline" /> Online
          <input type="radio" value="Offline" name="isOnline" /> Offline
        </div>
        <div onChange={handleChange}>
          <input type="radio" value="False" name="TypeOfComp" /> Individual
          <input type="radio" value="True" name="TypeOfComp" /> Team
        </div>
        

        <button
          type="button"
          className="btn btn-primary m-3 my-button"
          onClick={(e) => appendCompetition(e)}
        >
          Register
        </button>
      </form>
  </div>;
}

export default Admin;
