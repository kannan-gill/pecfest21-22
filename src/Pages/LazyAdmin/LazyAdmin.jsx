import React,{useState,useEffect} from 'react'
import { getList } from 'services';
import SimpleInput from 'Components/Utilities/SimpleInput';
import SelectInput from 'Components/Utilities/SelectInput';
import { eventManager } from 'react-toastify/dist/core';

function LazyAdmin() {

    const [competitionsData, setCompetitionsData]=useState([]);
    const [usersData, setUsersData] = useState([]);
    const [event, setEvent] = useState({category:"",rank:-1,users:[]});

    const searchStates = {Technical : [true,true], Cultural: [true, false], Megashow: [false, false], Event: [false, true]}

    useEffect(()=>{
      getList('events').then(data=>{
        setCompetitionsData(data);
      })
      getList('users').then(data=>{
        setUsersData(data);
      })
    },)

    const changeHandler = (name, value) => {
        setEvent((prevState) => {
          return { ...prevState, [name]: value };
        });
      };

      function handleSubmit(){
        var eventCategory = searchStates[event.category];
        var competition = competitionsData.filter(a=> a.rank==event.rank && a.isCompetition==eventCategory[0] && a.isTechnical==eventCategory[1]);
        setEvent((prevState) => {
          return { ...prevState, users: competition.registeredUsers };
        });
        var usersList=[];
        event.users.forEach(user=>{
          usersData.forEach(users=>{

          })
        })
      }

  return (
    <div>
        <form>
            <h4>Please select category of event</h4>
            <SelectInput
                        value={event.category}
                        changeFunc={changeHandler}
                        name="category"
                        icon="key"
                        label="Competition Category"
                        val={event.category}
                        disabledOption="Competition Category"
                        options={["Technical", "Cultural", "Megashow","Event"]}
                        isValid="true"
            />
             <h4>Please select rank of event</h4>
            <SimpleInput
                        type="number"
                        icon="at"
                        placeholder="Rank of competition"
                        name="rank"
                        val={event.rank}
                        changeFunc={changeHandler}
            />
             <Button
                  className="mx-3"
                  type="button"
                  onClickFunc={handleSubmit}
                >
                  ADD
            </Button>
        </form>
    </div>
  )
}

export default LazyAdmin