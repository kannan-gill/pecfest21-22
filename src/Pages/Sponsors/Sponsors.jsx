import React, { useEffect, useState } from "react";
import styles from "./Sponsors.module.css";
import BackgroundImage from "Components/BackgroundImage/BackgroundImage";
import SponsorCard from "./SponsorCard";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getList, updateDoc } from "../../services";

const Sponsors = ({ color }) => {
  const [sponsors, setSponsors] = useState([]);
  const storage = getStorage();

  useEffect(() => {
    getList("sponsors")
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
    <BackgroundImage color={color}>
      <div className={`flex-grow-1 d-flex flex-column align-items-center overflow-auto ${styles.main_container}`}>
        <h1
          className={`text-white text-center main_font text-uppercase animate__animated animate__fadeIn ${styles.heading}`}
        >
          Our Sponsors
        </h1>
        <div
          className={`mb-4 w-50 ${styles.headingLine}`}
        >
          &nbsp;
        </div>
        <div className="text-white text-italic w-75 mb-4 text-center font-italic animate__animated animate__fadeIn">
          In recent years PECFEST has had the honor to have facilitated a number
          of sponsors which gave an exceptionally engaging experience to our
          students as well as the brand.
        </div>
        <div className="d-flex flex-row w-75 flex-wrap justify-content-center">
          {sponsors.map((sponsor) => {
            return (
              <SponsorCard
                key={sponsor.id}
                image={sponsor.url}
                name={sponsor.name}
                desc={sponsor.type}
              />
            );
          })}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Sponsors;
