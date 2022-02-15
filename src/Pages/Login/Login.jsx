import React,{useState} from 'react';

function Login() {
    const [login,setlogin]=useState({email:"",password:""})


    function handleSubmit(e){
      e.preventDefault();

    }

  return <div>
      <label>Pecfest Email</label>
      <input type="text" name="email" value={login.email} onChange={(e)=>setlogin({...login,email:e.target.value})}/>
      <label>Password</label>
      <input type="password" name="password" value={login.password} onChange={(e)=>setlogin({...login,password:e.target.value})}/>
      <button onClick={(e)=>handleSubmit(e)}>Login</button>
  </div>;
}

export default Login;
