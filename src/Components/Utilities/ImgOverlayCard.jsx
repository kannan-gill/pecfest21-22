import React from "react";
import { Card } from "react-bootstrap";
import BgImg from "../Utilities/BgImg";
import "../../index.css";
import "../../Pages/Home/Home2.css"

const ImgOverlayCard = () => {
  return (
    <Card className="bg-dark text-white rounded-0" style={{height: "50vh"}}>
      <BgImg className="opacity-50" url="../../Images/login_register_bg.jpg" ></BgImg>
      <Card.ImgOverlay className="">
        <Card.Title className="text-uppercase text-wrap fw-bold text-center h-100 w-100 d-flex justify-content-center align-items-center">
          <div className="fs-1" >Competition Name</div>
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ImgOverlayCard;
