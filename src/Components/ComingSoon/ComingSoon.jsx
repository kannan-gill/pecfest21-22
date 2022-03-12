import { letterSpacing } from '@mui/system';
import React from 'react'
import Countdown from "react-countdown";

function ComingSoon() {
  return (
      <>
        <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <img style={{position:"absolute",top:"44%", width:"15%",left:"50%",minWidth:"200px"}} src="../../Images/pfdates.png" alt="none"/>
        <div className="d-flex flex-row vw-100 align-items-center h-50 justify-content-center text-white">
            <img style={{width:"20%", minWidth:"300px", zIndex:1}} src='../../Images/logo-final-red.png' alt='none'/>
            
        </div>
        <div className="d-flex flex-row vw-100 align-items-center h-25 justify-content-center  text-white">
            <h1 className='comingsoon' style={{textShadow:"5px 5px 5px black",letterSpacing:"5px", fontSize:"40px", fontFamily:"audiowide"}}>Coming Soon</h1>
        </div>
        <div className="d-flex flex-row vw-100 align-items-top h-25 justify-content-center text-white">
            <h3 style={{textShadow:"5px 5px 5px black",letterSpacing:"5px",fontSize:"30px",fontFamily:"audiowide"}}><Countdown date={"2022-04-16T00:00:00"} /></h3>
        </div>
        </>
  )
}

export default ComingSoon