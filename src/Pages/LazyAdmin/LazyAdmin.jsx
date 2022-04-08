import React,{useState,useEffect} from 'react'
import { getList } from 'services';
import SimpleInput from 'Components/Utilities/SimpleInput';
import SelectInput from 'Components/Utilities/SelectInput';
import ReactTable from 'react-table'
import exportFromJSON from 'export-from-json';
import { useTreeItem } from '@mui/lab';
import './lazyAdmin.css'

function LazyAdmin() {

    const [competitionsData, setCompetitionsData]=useState([]);
    const [usersData, setUsersData] = useState([]);
    const [event, setEvent] = useState("");
    const [chosenComp, setChosenComp]= useState({});
    const [finalUserData, setFinalUserData]=useState([]);
    const [eventTeamsData, seteventTeamsData] = useState([]);


    useEffect(()=>{
      getList('events').then(data=>{
        setCompetitionsData(data);
      })
     
    },[])

    function handleChange(name,value){
      setEvent(value);
    }

    function ExportToExcel(){
      var data = finalUserData;
      var fileName = chosenComp.name + Date.now();
      var exportType = exportFromJSON.types.xls;
      exportFromJSON({data,fileName,exportType});
    }

    function handleEventSelection(comp){
      setFinalUserData([]);
      setChosenComp(comp);
      var registeredUserObjects = {};
      var teamidList = [];
      getList('users').then(data=>{
        setUsersData(data);
      })
      chosenComp.hasOwnProperty('registeredUsers') && chosenComp.registeredUsers.map(user=>{
        registeredUserObjects[`${user.userId}`] = user.prelimLink;
        if(comp.isTeamEvent === true){
          teamidList.push(user.userId);
        }
      })

      if(comp.isTeamEvent === true){
        var teamDocuments = [];
        getList('event-teams').then(data=>{
          seteventTeamsData(data);
        })

        var TeamsInThisEvent = eventTeamsData.filter(event=>teamidList.includes(event.id));
        var teamsExpanded = [];
        TeamsInThisEvent.forEach(member=>{
          member.teamMembers.forEach(pecfestids=>{
            teamsExpanded.push(pecfestids);
          })
        })
      
        var allMembersAllTeams = usersData.filter(user=>teamsExpanded.includes(user.pecfestId));
        allMembersAllTeams = allMembersAllTeams.map(participant=>{
          participant.registeredEvents.map(event=>{
            if(event.eventId===chosenComp.id){
              participant['prelimsLink'] = event.prelimLink;
              participant['teamId'] = event.teamId;
            }
          })
          return participant;
        })

        allMembersAllTeams.sort((a,b)=>a.teamId.toString().localeCompare(b.teamId.toString(), 'en', { numeric: true }));
        
        var index = 0;
        if(allMembersAllTeams.length > 0){
          allMembersAllTeams[0]['teamNumber'] = 0;
          for(var i = 1; i<allMembersAllTeams.length;i++){
            if(allMembersAllTeams[i].teamId === allMembersAllTeams[i-1].teamId){
              allMembersAllTeams[i]['teamNumber'] = index;
            }
            else{
              index++;
              allMembersAllTeams[i]['teamNumber'] = index;
            }            
          }

          allMembersAllTeams = allMembersAllTeams.map(allmembers=>{
            delete allmembers.registeredEvents;
            delete allmembers.teamId;
            return allmembers;
          })
         
          setFinalUserData(allMembersAllTeams);
        }
       
      }

        else{
          var filteredArray = usersData.filter(user=> Object.keys(registeredUserObjects).includes(user.id));
        filteredArray = filteredArray.map((user,index)=>{
          user['prelimsLink']=registeredUserObjects[user.id];
          delete user.registeredEvents;
          delete user.id;
          return user;
        })
        filteredArray.length>0 && setFinalUserData(filteredArray);
        console.log(filteredArray);
        }
    }

  
  return (
    <div className='lazyadminbg' >
        <form>
            <div className='d-flex jusitfy-content-center'><h4 className='text-white my-5 m-auto'>Please select Name of event</h4></div>
            <div className='d-flex justify-content-center'><SimpleInput
                        type="text"
                        icon="at"
                        placeholder="Name of competition"
                        name="Name"
                        val={event}
                        changeFunc={handleChange}
            /></div>
        </form>

      <div className='d-flex flex-wrap w-100'>
      {competitionsData.filter(data=> data.name.toLowerCase().includes(event.toLowerCase())).map(comp=>{
        return <p key={comp.name} className='text-black m-2 bg-warning p-2 rounded' onClick={(e)=>{handleEventSelection(comp)}}>{comp.name}</p>
      })}
      </div>
      <div>

          <table className='customTable w-100 text-white font-weight-bold'>
            <tr>
              <th>{chosenComp.isTeamEvent ? <>Team No.</> : <>S. No</>}</th>
              <th>Name</th>
              <th>Gender</th>
              <th>college</th>
              <th>degree</th>
              <th>Graduation year</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Pecfest ID</th>
              <th>Date of birth</th>
              <th>Prelims Link</th>
            </tr>
            {finalUserData.map((participant, index)=>{
              return (
                <tr key = {index}>
                  <td>{chosenComp.isTeamEvent ? participant.teamNumber : index}</td>
                  <td>{participant.name}</td>
                  <td>{participant.gender}</td>
                  <td>{participant.college}</td>
                  <td>{participant.degree}</td>
                  <td>{participant.year}</td>
                  <td>{participant.phone}</td>
                  <td>{participant.email}</td>
                  <td>{participant.pecfestId}</td>
                  <td>{participant.dob}</td>
                  <td>{participant.prelimsLink}</td>
                </tr>
              )
            })}
          </table>

      </div>

      <div className='d-flex justify-content-center mt-2'><button className='btn btn-danger m-3' onClick={ExportToExcel}>Export To Excel</button></div>

    </div>
  )
}

export default LazyAdmin