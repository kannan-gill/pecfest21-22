import React, { useEffect, useState } from "react";
import styles from "./Sponsors.module.css";
import BackgroundImage from "Components/BackgroundImage/BackgroundImage";
import SponsorCard from "./SponsorCard";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getSortedList, updateDoc } from "../../services";
import StarsBg from "Components/StarsBg";

const Sponsors = ({ color }) => {
  const [sponsors, setSponsors] = useState([]);
  const storage = getStorage();

  useEffect(() => {
    getSortedList("sponsors", {"field": "rank", "order": "asc"})
      .then((res) => {
        res.forEach((sponsor) => {
          if (sponsor["url"] === undefined) {
            getDownloadURL(
              ref(storage, `Sponsors/${sponsor["imageName"]}`)
            ).then((url) => {
              setSponsors((prev) => [...prev, { ...sponsor, url }]);
              const sponsorId = sponsor.id;
              const { id, ...sponsorWithoutId } = sponsor;
              updateDoc("sponsors", sponsorId, {
                ...sponsorWithoutId,
                url,
              });
            });
          } else {
            setSponsors((prev) => [...prev, { ...sponsor }]);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{height:"100vh"}} className={`${styles.outerdiv}`}>
      <StarsBg/>
        <div className={`flex-grow-1 d-flex flex-column align-items-center overflow-auto ${styles.main_container}`}>
        <h1
          className={`text-white text-center main_font text-uppercase animate__animated animate__fadeIn ${styles.heading}`}
        >
          Our Sponsors
        </h1>
        
        <div
          className={`mb-4 w-25 ${styles.headingLine}`}
        >
          &nbsp;
        </div>
        <div style={{fontFamily:"Audiowide"}} className="text-white w-75 mb-4 text-center animate__animated animate__fadeIn">
          Thank you to our sponsors
        </div>
        
        <div className="d-flex flex-row w-75 flex-wrap justify-content-center">
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
        </div>
        </div>
        </div>
  );
};

export default Sponsors;
