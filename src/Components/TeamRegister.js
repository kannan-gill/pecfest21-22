import React,{useState} from 'react';

function TeamRegister() {
    const [users,setusers]=useState([]);
    const [user, editUser] = useState({name:"", college:"",email:"",phone:"", year:"",gender:""})

    function appendUser(e){
        e.preventDefault();
        var members = users;
        members.push(user);
        setusers(members);
        editUser({name:"", college:"",email:"",phone:"", year:"",gender:""})
    }

    function handleDelete(e, phone){
        e.preventDefault();
        var members = users;
        var index = members.findIndex(user=>user.phone === phone);
        members.splice(index,1);
        console.log(members);
        setusers(members);
        editUser({name:"", college:"",email:"",phone:"", year:"",gender:""})
    }

    function handleEdit(e, phone){
        e.preventDefault();
        var members = users;
        var index = members.findIndex(user=>user.phone === phone);
        var member = members[index];
        editUser({...user,name:member.name,college:member.college,email:member.email,phone:member.phone,year:member.year,gender:member.gender})
        members.splice(index,1);
        setusers(members);
    }

  return <div>
      <form>
                <div >
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" value={user.name} onChange={(e)=>editUser({...user,name:e.target.value})}></input>
                </div>
                <div >
                <label>College</label>
                <input type="text" name="college" placeholder="College" value={user.college} onChange={(e)=>editUser({...user,college:e.target.value})}></input>
                </div>
                <div >
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" value={user.email} onChange={(e)=>editUser({...user,email:e.target.value})}></input>
                </div>
                <div >
                <label>Phone Number</label>
                <input type="text" name="phone number" placeholder="Phone Number" value={user.phone} onChange={(e)=>editUser({...user,phone:e.target.value})}></input>
                </div>
                
                <button className="btn btn-primary m-3 my-button" onClick={(e)=>appendUser(e)}>Add User</button>
        </form>

        {users.map(user=>{
            return <div key={user.name}>
                <div>{user.name}</div>
                <div>{user.college}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.year}</div>
                <div>{user.gender}</div>
                <button onClick={e=>(handleEdit(e,user.phone))}>Edit</button>
                <button onClick={e=>(handleDelete(e,user.phone))}>Delete</button>
            </div>
            })}

  </div>;
}

export default TeamRegister;
