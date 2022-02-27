import React, { useEffect, useState } from "react";
import styles from './ExpandingCircle.module.css';
const ExpandingCircle = ({ initX, initY, color }) => {
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
    <>
      <div className={`${styles.expandingCircle} translate-middle`} style={circleStyle}></div>
    </>
  );
};
export default ExpandingCircle;
