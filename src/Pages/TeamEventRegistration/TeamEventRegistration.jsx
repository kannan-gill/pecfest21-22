import React,{useState} from 'react'

var id = 1;

function TeamEventRegistration(props) {
    const [members,setMembers] = useState([{ID:0,mail:"kannan"}]);
    const [memberMail, setMemberMail] = useState({ID:id,mail:""});
    const [limitreached,setlimitreached]=useState(false);

    function handleMemberSubmit(e){
        e.preventDefault();
        if(members.length >= 3){
            setlimitreached(true);
        }
        else{
            console.log(id);
            var memberslist = members;
            memberslist.push(memberMail);
            setMembers(memberslist);
            id = id+1;
            setMemberMail({...memberMail,ID:id,mail:""});
        }
        
    }

    function handleEdit(e,ID){
        e.preventDefault();
        var index = members.findIndex(user=>user.ID === ID);
        id = id+1;
        setMemberMail({...memberMail,mail:members[index].mail})
        members.splice(index,1);
        setlimitreached(false);
        setMembers(members);
    }

    function handleDelete(e,ID){
        e.preventDefault();
        var index = members.findIndex(user=>user.ID === ID);
        console.log(index);
        members.splice(index,1);
        setMembers(members);
        setlimitreached(false);
        setMemberMail({...memberMail,mail:""})
    }

    function handleSubmit(e){
        e.preventDefault();
        
    }

  return (
    <div>
        <div>Please Enter the Pecfest emails of your team members</div>
        <div>Make sure they have registered at pecfest.in</div>
        <input 
            type="text" 
            name="email"
            placeholder="Pecfest Email"
            value={memberMail.mail}
            onChange={(e) => setMemberMail({...memberMail, mail:e.target.value})}
        ></input>
        <button onClick={(e)=>handleMemberSubmit(e)}>Add Member</button>

        <div>
            {members.map(member=>{
                return <div key={member.ID}>
                    {member.mail}
                    <button onClick={(e)=>{handleEdit(e,member.ID)}}>Edit</button>
                    <button onClick={(e)=>{handleDelete(e,member.ID)}}>Delete</button>
                </div>
            })}
            {limitreached && <div>Cannot add more members in this event</div>}
        </div>
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
    </div>
  )
}

export default TeamEventRegistration