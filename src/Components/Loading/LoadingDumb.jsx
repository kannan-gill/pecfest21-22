import React from "react";
import './LoadingDumb.css'
const LoadingDumb = () => (
  <div style={{background:"black"}} className="d-flex flex-row vw-100 align-items-center h-100 justify-content-center text-white">
    <img className="leftwing" src='https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2Fpecfest-officiallogo-leftwing.png?alt=media&token=7ffb3f90-2a6c-4f21-945d-24a71b9fde58' alt='none'/>
    <img className="middle" src='https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2Fpecfest-officiallogo-middle.png?alt=media&token=d461732f-ca07-40ba-ac36-600e3c3ebd33' alt='none'/>
    <img className="rightwing" src='https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2Fpecfest-officiallogo-rightwing.png?alt=media&token=b80f3a4d-c5ee-49d0-b14f-4b86b4987813' alt='none'/>
    <img style={{animation:"moveLoader 1s infinite alternate-reverse", position:"absolute", top:"75%", width:"15%",minWidth:"200px",left:"50%"}} src="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2Fpfdates.png?alt=media&token=bafe6b1e-a6d4-4ec7-a7c2-927ddac85cff" alt="none"/>
  </div>
);

export default LoadingDumb;
