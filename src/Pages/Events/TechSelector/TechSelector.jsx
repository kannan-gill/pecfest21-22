import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventList from "../EventsList/EventList";
import styles from "./TechSelector.module.scss";
const TechCulturalSelector = () => {
  const [openTechnical, setOpenTechnical] = useState(false);
  const [openCultural, setOpenCultural] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (openTechnical || openCultural) {
      setTimeout(() => {
        console.log(openTechnical, openCultural);
        if(openTechnical){
          navigate("/tech-events");
          return;
        }
        navigate("/cultural-events");
        
      }, 700);
    }
  }, [openTechnical, openCultural]);
  return (
    <div className="vh-100 zi-top" style={{ background: "#07202a" }}>
      <div
        onClick={() => {
          console.log("opened");
          setOpenTechnical(true);
        }}
        className={`${styles.image}  ${styles.cultural} ${
          openTechnical && styles.open_page
        } cursor-pointer`}
      >
        <h1
          onClick={() => {
            setOpenTechnical(true);
          }}
          className={`${
            openCultural && "animate__fadeOutLeft"
          } zi-top cursor-pointer text-white position-absolute top-50 mx-5 px-5 translate-middle-y ${
            styles.header_large
          }`}
        >
          Technical
        </h1>
        <img
          src="https://picsum.photos/1920/1080"
          className={`${styles.culturalImage} vh-100 vw-100`}
        />
      </div>

      <div
        onClick={() => {
          console.log("opened");
          setOpenCultural(true);
        }}
        className={`${styles.image} ${
          !(openTechnical || openCultural) && styles.technical
        } ${openCultural && styles.open_page}
            cursor-pointer bg-image `}
      >
        <h1
          onClick={() => {
            setOpenCultural(true);
          }}
          className={`${
            openTechnical && "animate__fadeOutRight"
          }  zi-top animate__animated animate__faster cursor-pointer text-white position-absolute top-50 end-0 mx-5 px-5 translate-middle-y ${
            styles.header_large
          }`}
        >
          Cultural
        </h1>
        <img
          src="https://picsum.photos/1920/1080?random"
          className={`${styles.technicalImage} vh-100 vw-100  `}
        />
      </div>
    </div>
  );
};

export default TechCulturalSelector;
