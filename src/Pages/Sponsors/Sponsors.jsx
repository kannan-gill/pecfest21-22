import React from "react";
import styles from "./Sponsors.module.css";
import BackgroundImage from "Components/BackgroundImage/BackgroundImage";
import Untitled from "../../Images/Untitled.png";

const Sponsors = ({ color }) => {
  return (
    <BackgroundImage color={color}>
      <div className="vh-100 d-flex flex-column align-items-center">
        <h1
          className={`text-white text-center main_font text-uppercase mt-5 pt-4 pt-md-2 ${styles.heading}`}
        >
          Our Sponsors
        </h1>
        <div className="mb-4" style={{height:"2px" ,width: "50%", backgroundColor: "whitesmoke"}}></div>
        <div className="d-flex flex-row w-75 flex-wrap justify-content-center">
          <div
            className={`d-flex flex-column justify-content-start align-items-center p-3 me-4 mb-4 ${styles.card}`}
          >
            <img src={Untitled} alt="sponsor_image" style={{ height: "8em" }} />
            <div
              className={`text-white text-center text-center ${styles.sponsor_name}`}
            >
              TATA Motors
            </div>
            <hr className="w-75 text-white" style={{ margin: "10px" }}></hr>
            <div
              className={`text-uppercase text-white text-center text-center ${styles.sponsor_desc}`}
            >
              Marketing Sponsors
            </div>
          </div>
          <div
            className={`d-flex flex-column justify-content-start align-items-center p-3 me-4 mb-4 ${styles.card}`}
          >
            <img src={Untitled} alt="sponsor_image" style={{ height: "8em" }} />
            <div
              className={`text-white text-center text-center ${styles.sponsor_name}`}
            >
              TATA Motors
            </div>
            <hr className="w-75 text-white" style={{ margin: "10px" }}></hr>
            <div
              className={`text-uppercase text-white text-center text-center ${styles.sponsor_desc}`}
            >
              Marketing Sponsors
            </div>
          </div> <div
            className={`d-flex flex-column justify-content-start align-items-center p-3 me-4 mb-4 ${styles.card}`}
          >
            <img src={Untitled} alt="sponsor_image" style={{ height: "8em" }} />
            <div
              className={`text-white text-center text-center ${styles.sponsor_name}`}
            >
              TATA Motors
            </div>
            <hr className="w-75 text-white" style={{ margin: "10px" }}></hr>
            <div
              className={`text-uppercase text-white text-center text-center ${styles.sponsor_desc}`}
            >
              Marketing Sponsors
            </div>
          </div> <div
            className={`d-flex flex-column justify-content-start align-items-center p-3 me-4 mb-4 ${styles.card}`}
          >
            <img src={Untitled} alt="sponsor_image" style={{ height: "8em" }} />
            <div
              className={`text-white text-center text-center ${styles.sponsor_name}`}
            >
              TATA Motors
            </div>
            <hr className="w-75 text-white" style={{ margin: "10px" }}></hr>
            <div
              className={`text-uppercase text-white text-center text-center ${styles.sponsor_desc}`}
            >
              Marketing Sponsors
            </div>
          </div> <div
            className={`d-flex flex-column justify-content-start align-items-center p-3 me-4 mb-4 ${styles.card}`}
          >
            <img src={Untitled} alt="sponsor_image" style={{ height: "8em" }} />
            <div
              className={`text-white text-center text-center ${styles.sponsor_name}`}
            >
              TATA Motors
            </div>
            <hr className="w-75 text-white" style={{ margin: "10px" }}></hr>
            <div
              className={`text-uppercase text-white text-center text-center ${styles.sponsor_desc}`}
            >
              Marketing Sponsors
            </div>
          </div> <div
            className={`d-flex flex-column justify-content-start align-items-center p-3 me-4 mb-4 ${styles.card}`}
          >
            <img src={Untitled} alt="sponsor_image" style={{ height: "8em" }} />
            <div
              className={`text-white text-center text-center ${styles.sponsor_name}`}
            >
              TATA Motors
            </div>
            <hr className="w-75 text-white" style={{ margin: "10px" }}></hr>
            <div
              className={`text-uppercase text-white text-center text-center ${styles.sponsor_desc}`}
            >
              Marketing Sponsors
            </div>
          </div>
          
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Sponsors;
