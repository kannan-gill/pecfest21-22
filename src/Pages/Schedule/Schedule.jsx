import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Schedule() {
  const navigate = useNavigate();

  useEffect(()=>{
    window.open('https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/Pecfest%20Schedule.pdf?alt=media&token=93d5afe7-9654-4d3e-9156-ebbf283dd0cf', "_blank")
    navigate(-1);
  },[]);

  return (
    <></>
  )
}

export default Schedule