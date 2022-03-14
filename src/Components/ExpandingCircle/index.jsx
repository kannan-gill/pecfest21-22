import React, { useEffect, useState } from "react";
import styles from "./ExpandingCircle.module.css";
const ExpandingCircle = ({ initX, initY, color, text }) => {
  const [radius, setRadius] = useState("0");
  var circleStyle = {
    backgroundColor: color,
    width: radius,
    height: radius,
    top: initY,
    left: initX,
  };
  useEffect(() => {
    setTimeout(() => {
      setRadius("10000px");
    }, 200);
  }, []);
  return (
    <div className={`position-relative ${styles.container}`}>
      <div className={`text-white position-fixed zi-1 top-50 start-50 translate-middle header-large animate__animated animate__fadeIn animate__slow ${styles.largeHeading}`}>
        {text}
      </div>
      <div
        className={`${styles.expandingCircle} translate-middle`}
        style={circleStyle}
      ></div>
    </div>
  );
};
export default ExpandingCircle;
