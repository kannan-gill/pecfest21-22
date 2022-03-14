import React from "react";

const BgImg = ({ url, children, className }) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={`w-100 h-100 bg_img ${className}`}
    >{ children }</div>
  );
};

export default BgImg;
