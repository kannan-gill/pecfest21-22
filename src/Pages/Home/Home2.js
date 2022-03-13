import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Home2.css";
import AboutPecfest from "../../Components/AboutPecfest/AboutPecfest";
import Navbar from "../../Components/Navbar";
import Loading from "../../Components/Loading";
import FullPageCarousel from "Components/FullPageCarousel";
import Sponsors from "Components/Sponsors";
import PlanetNav from "Components/PlanetNav"; 

const pageList = [<AboutPecfest />, <Sponsors />];

function Home2({ initialPage }) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [transitionAnimation, setTransitionAnimation] = useState("");
  
  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);
  const scrollHandler = (scrollEvent) => {
    console.log(scrollEvent.deltaY);

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
    setTransitionAnimation(prevPage);
    setCurrentPage(nextPage);
    setTimeout(() => {
      setTransitionAnimation("");
    }, 800);
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
          className={`animate__animated animate__fast overflow-hidden bg-dark h-100 position-absolute top-0 start-0 w-100 ${
            transitionAnimation === "landing" && "animate__slideInUp"
          } ${transitionAnimation === "aboutUs" && "animate__slideOutDown"}
        `}
        >
          <FullPageCarousel pageList={pageList} />
        </div>
      )}

      {/* Up Arrow */}
      {currentPage !== "landing" && (
        <div className="prev-page animate__animated animate__fadeInUp">
          {/* TODO: get a better icon for tis */}
          <FontAwesomeIcon
            onClick={() => {
              setNextPage("landing", "aboutUs");
            }}
            icon={faAngleUp}
            className="m-0 p-4 animate__animated animate__infinite animate__pulse cursor-pointer"
            size="4x"
            color="white"
          />
        </div>
      )}

      {/* Down Arrow */}
      {currentPage !== "aboutUs" && (
        <div className="next-page animate__animated animate__fadeInDown">
          {/* TODO: get a better icon for tis */}
          <FontAwesomeIcon
            onClick={() => {
              setNextPage("aboutUs", "landing");
            }}
            icon={faAngleDown}
            className="m-0 p-4 animate__animated animate__infinite animate__pulse cursor-pointer"
            size="4x"
            color="white"
          />
        </div>
      )}
    </div>
  );
}

export default Home2;
