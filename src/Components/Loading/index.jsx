import React, { useEffect, useState } from "react";
import useAnimatedRenderer from "../../hooks/useAnimatedRenderer";
import LoadingDumb from "./LoadingDumb";
const Loading = ({ isLoading, children }) => {
  const [hasTimePassed, setHasTimePassed] = useState(false);
  const [visibilty, setVisibility] = useAnimatedRenderer(false, 1000);
  useEffect(() => {
    setTimeout(() => {
      setHasTimePassed(true);
    }, 700);
  }, []);
  useEffect(() => {
    setVisibility(hasTimePassed && !isLoading);
  }, [isLoading, hasTimePassed, setVisibility]);
  return (
    <>
      {!visibilty && (
        <div
          className={`position-absolute zi-2 top-0 left-0 vh-100 vw-100 animate__animated h-100 ${
            hasTimePassed && !isLoading && "animate__fadeOut"
          }`}
        >
          <LoadingDumb />
        </div>
      )}
      <div className="zi-1 position-relative">{children}</div>
    </>
  );
};
export default Loading;
