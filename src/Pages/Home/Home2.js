import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Home2.css";
import AboutPecfest from "../../Components/AboutPecfest/AboutPecfest";
import Navbar from "../../Components/Navbar";
import Loading from "../../Components/Loading";
import FullPageCarousel from "Components/FullPageCarousel";
import PlanetNav from "Components/PlanetNav";
import UpArrow from "Components/UpArrow";
import DownArrow from "Components/DownArrow";
import { useNavigate } from "react-router-dom";

const pageList = [
  ...AboutPecfest(),
  // <Sponsors />
];

function Home2({ initialPage }) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [transitionAnimation, setTransitionAnimation] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);
  const scrollHandler = (scrollEvent) => {

    if (
      transitionAnimation === "" &&
      scrollEvent.deltaY > 10 &&
      currentPage === "landing"
    ) {
      setNextPage("aboutUs", "landing");
    } else if (
      transitionAnimation === "" &&
      scrollEvent.deltaY < 0 &&
      currentPage === "aboutUs"
    ) {
      setNextPage("landing", "aboutUs");
    }
  };
  const setNextPage = (nextPage, prevPage) => {
    if(nextPage === 'aboutUs'){
      navigate("/aboutUs");
    }
    else{
      navigate("/");
    }
    
    setTransitionAnimation(prevPage);
    setCurrentPage(nextPage);
    setTimeout(() => {
      setTransitionAnimation("");
    }, 1000);
  };

  return (
    <div
      className="vh-100 w-100 animate__animated animate__fadeIn animate__slow overflow-hidden"
      onWheel={scrollHandler}
    >
      {(currentPage === "landing" || transitionAnimation === "landing") && (
        <PlanetNav transitionAnimation={transitionAnimation} />
      )}
      {(currentPage === "aboutUs" || transitionAnimation === "aboutUs") && (
        <div
          className={`animate__animated animate__fast overflow-hidden h-100 position-absolute top-0 start-0 w-100 aboutUsBg ${
            transitionAnimation === "landing" && "animate__slideInUp"
          } ${transitionAnimation === "aboutUs" && "animate__slideOutDown"}
        `}
        >
          <FullPageCarousel pageList={pageList} />
        </div>
      )}

      {/* Up Arrow */}
      {currentPage !== "landing" && (
        <div className="zi-top prev-page start-50 top-0 mt-5  translate-middle ">
          <div className="w-100 h-100 animate__animated animate__fadeInUp">
            {/* <FontAwesomeIcon
            onClick={() => {
              setNextPage("landing", "aboutUs");
            }}
            icon={faAngleUp}
            className="m-0 p-4 animate__animated animate__infinite animate__pulse cursor-pointer"
            size="4x"
            color="white"
          /> */}
          <div
            onClick={() => {
              setNextPage("landing", "aboutUs");
              navigate("/");
            }}
            className="h-100 w-100 d-flex align-items-center justify-content-center animate__animated animate__infinite animate__pulse cursor-pointer"
          >
            <UpArrow />
            </div>
          </div>
        </div>
      )}

      {/* Down Arrow */}
      {currentPage !== "aboutUs" && (
        <div className="zi-top next-page start-50 bottom-0 translate-middle ">
          <div className="next-page animate__animated animate__fadeInDown">
            {/* <FontAwesomeIcon
            onClick={() => {
              setNextPage("aboutUs", "landing");
            }}
            icon={faAngleDown}
            className="m-0 p-4 animate__animated animate__infinite animate__pulse cursor-pointer"
            size="4x"
            color="white"
          /> */}
          <div
            onClick={() => {
              setNextPage("aboutUs", "landing");
            }}
            className="h-100 w-100 d-flex align-items-center justify-content-center animate__animated animate__infinite animate__pulse cursor-pointer"
          >
            <DownArrow />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home2;
