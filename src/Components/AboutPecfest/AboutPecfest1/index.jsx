import React from "react";
import StarsBg from "../../StarsBg";
import BottomBars from "../../BottomBars";
import Spacecraft from "../../Spacecraft";
import styles from "./AboutPecfest1.module.css";

const AboutPecfest1 = () => {
  return (
    <div className="text-white w-100 h-100 overflow-hidden position-relative animate__animated">
      <StarsBg />
      <div
        className={`w-100 h-100  ${styles["content-container"]} d-flex flex-grow-1 flex-column align-items-center justify-content-start`}
      >
        <div className="h-50 d-flex flex-column align-items-center justify-content-center overflow-hidden">
          <div
            className={`d-flex flex-column ${styles["text-container"]} justify-content-center `}
          >
            <div>
              <div className="flex-column pb-4" style={{ color: "#E7D7AC" }}>
                “Take a rocket from your pocket and Zip-Zap-Zoom with us on a
                two day Cosmic Escapade.”
              </div>
              Punjab Engineering College presents to you "PECFest 2021-22: A
              Cosmic Escapade". A mesmerising unforgettable experience
              jam-packed with thrill and adventure. Every year, an army of
              adrenaline pumped and full of life students put their hearts and
              souls into this enigma that resonates and soars above the entire
              nation.
            </div>
          </div>
        </div>
        <div className="h-50 d-flex flex-column justify-content-end align-items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2FaboutUsNoGlow.png?alt=media&token=https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2F404.png?alt=media&token=https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2FaboutUsNoGlow.png?alt=media&token=3b4f4e9e-a08a-44d2-bade-d00457103414"
            alt="About Us"
            className={styles["img-container"]}
          />
        </div>
      </div>

      <div
        className={`w-100 position-absolute bottom-0 start-0 ${styles["bars-container"]}`}
      >
        <BottomBars />
      </div>
      <div
        className={`position-absolute d-none d-sm-flex bottom-0 start-100 ${styles.spacecraft}`}
      >
        <Spacecraft />
      </div>
    </div>
  );
};

export default AboutPecfest1;
