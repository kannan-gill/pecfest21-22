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
    getList('sponsors').then(data=>{
        data.sort(function(a,b){return a.rank - b.rank})
        console.log(data);
        data.forEach(team=>{
          console.log(team)
          if(team.sponsors.length>0){
            team.sponsors.sort((a,b) => (a.rankWithin < b.rankWithin) ? 1 : ((b.rankWithin < a.rankWithin) ? -1 : 0))
          }
            
        })
        setSponsors(data);
    });
    
},[])


  return (
    
    <div style={{height:"100vh"}} className={`${styles.outerdiv}`}> 
      <StarsBg/>
        <div className={`flex-grow-1 d-flex flex-column align-items-center overflow-auto ${styles.main_container}`}>


        {sponsors.map(sponsor=>{
          return sponsor.sponsors.length > 0 ? 
           <div className='m-4' key={sponsor.id}>
           <h1  className={`text-white text-center main_font text-uppercase animate__animated animate__fadeIn ${styles.heading}`}>{sponsor.name}</h1>
          <center><div
          className={`m-4 w-25 ${styles.headingLine}`}
        >
          &nbsp;
        </div></center>

        <div className="d-flex flex-row w-100 flex-wrap justify-content-center">
          {sponsor.sponsors.map((sponsorchild,index) => 
            (
              <SponsorCard
                key={sponsorchild.name}
                image={sponsorchild.image}
                name={sponsorchild.name}
                desc={sponsorchild.type}
                index = {index}
              />
            )
          )}
        </div>
          </div>
          : <></>
        })}


        
        <div
          className={`m-4 w-25 ${styles.headingLine}`}
        >
          &nbsp;
        </div>
        <div style={{fontFamily:"Audiowide", fontSize:'20px'}} className="text-white w-75 mb-4 text-center animate__animated animate__fadeIn">
          Thank you to our sponsors
        </div>
        </div>
        </div>
  );
};

export default Sponsors;
