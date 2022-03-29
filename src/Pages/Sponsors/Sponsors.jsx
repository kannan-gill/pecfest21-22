import React, { useEffect, useState } from "react";
import styles from "./Sponsors.module.css";
import BackgroundImage from "Components/BackgroundImage/BackgroundImage";
import SponsorCard from "./SponsorCard";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getSortedList, updateDoc, getList } from "../../services";
import StarsBg from "Components/StarsBg";

function Sponsors(){
  const [sponsors, setSponsors] = useState([]);

  useEffect(()=>{
    getList('testsponsors').then(data=>{
        data.sort(function(a,b){return a[Object.keys(a)[0]].rank - b[Object.keys(b)[0]].rank})
        console.log(data);
        data.forEach(team=>{
            team[Object.keys(team)[0]].sponsors.sort((a,b) => (a.rankwithin < b.rankwithin) ? 1 : ((b.rankwithin < a.rankwithin) ? -1 : 0))
        })
        setSponsors(data);
    });
    
},[])


  return (
    
    <div style={{height:"100vh"}} className={`${styles.outerdiv}`}> 
      <StarsBg/>
        <div className={`flex-grow-1 d-flex flex-column align-items-center overflow-auto ${styles.main_container}`}>
        {/* <h1
          className={`text-white text-center main_font text-uppercase animate__animated animate__fadeIn ${styles.heading}`}
        >
          Our Sponsors
        </h1> */}


        {sponsors.map(sponsor=>{
          return <div className='m-4' key={sponsor[Object.keys(sponsor)[1]]}>
           <h1  className={`text-white text-center main_font text-uppercase animate__animated animate__fadeIn ${styles.heading}`}>{sponsor[Object.keys(sponsor)[0]].name}</h1>
          <center><div
          className={`m-4 w-25 ${styles.headingLine}`}
        >
          &nbsp;
        </div></center>

        <div className="d-flex flex-row w-100 flex-wrap justify-content-center">
        {console.log(sponsor[Object.keys(sponsor)[0]].sponsors)}
          {sponsor[Object.keys(sponsor)[0]].sponsors.map((sponsorchild,index) => {
            return (
              <SponsorCard
                key={sponsorchild.name}
                image={sponsorchild.imagesource}
                name={sponsorchild.name}
                desc={sponsorchild.type}
                index = {index}
              />
            );
          })}
        </div>
          </div>
        })}


        
        <div
          className={`m-4 w-25 ${styles.headingLine}`}
        >
          &nbsp;
        </div>
        <div style={{fontFamily:"Audiowide", fontSize:'20px'}} className="text-white w-75 mb-4 text-center animate__animated animate__fadeIn">
          Thank you to our sponsors
        </div>
        
        {/* <div className="d-flex flex-row w-75 flex-wrap justify-content-center">
          {sponsors.map((sponsor,index) => {
            return (
              <SponsorCard
                key={sponsor.id}
                image={sponsor.url}
                name={sponsor.name}
                desc={sponsor.type}
                index = {index}
              />
            );
          })}
        </div> */}
        </div>
        </div>
  );
};

export default Sponsors;
