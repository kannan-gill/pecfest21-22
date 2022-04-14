import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import ComingSoon from 'Pages/ComingSoon/ComingSoon';
import Navbar from 'Components/Navbar';

function Schedule() {

  
  const navigate = useNavigate();

  useEffect(()=>{
    window.open('https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/PECfest%20schedule%20%20(1).pdf?alt=media&token=59c4a67e-8baa-4a4f-82ca-41d6b72beb8c', "_blank")
    navigate(-1);
  },[]);

 

  return (
    <div className='vh-100' style={{background:"#fb6d62"}}>
    </div>
  )
}

export default Schedule