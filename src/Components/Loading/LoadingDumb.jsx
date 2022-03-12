import React from "react";
import './LoadingDumb.css'
const LoadingDumb = () => (
  <div style={{background:"black"}} className="d-flex flex-row vw-100 align-items-center h-100 justify-content-center text-white">
    <img className="leftwing" src='../../Images/pecfest-officiallogo-leftwing.png' alt='none'/>
    <img className="middle" src='../../Images/pecfest-officiallogo-middle.png' alt='none'/>
    <img className="rightwing" src='../../Images/pecfest-officiallogo-rightwing.png' alt='none'/>
    <img style={{animation:"moveLoader 1s infinite alternate-reverse", position:"absolute", top:"75%", width:"15%",minWidth:"200px",left:"50%"}} src="../../Images/pfdates.png" alt="none"/>
  </div>
);

export default LoadingDumb;
