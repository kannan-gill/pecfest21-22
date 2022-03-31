import React, { useEffect, useState } from "react";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import BackImg from "../../Images/back-img.png";
import nebulaBg from "../../Images/nebulabgextracted-edited.png";
import useAnimatedRenderer from "hooks/useAnimatedRenderer";
import ExpandingCircle from "Components/ExpandingCircle";
import StarsBg from "../StarsBg";
import { width } from "@mui/system";

const planets = [
  {
    route: "/events",
    text: "Events",
    speed: "-2",
    color: "#07202a",
  },
  {
    route: "/sponsors",
    text: "Sponsors",
    speed: "2",
    color: "rgb(237, 0, 140)",
  },

  {
    route: "/competitions",
    text: "Competitions",
    speed: "1",
    color: "#9a484b",
  },
  {
    route: "/schedule",
    text: "Schedule",
    speed: "3",
    color: "#fb6d62",
  },
  {
    route: "/merchandise",
    text: "Merchandise",
    speed: "-1",
    color: "#a941ce",
  },
];

const PlanetNav = ({ transitionAnimation }) => {
  const [explore, setExplore] = useState(false);
  const [showBack, setShowBack] = useAnimatedRenderer(explore);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [pageExitColor, setPageExitColor] = useState(null);
  const [pageExitX, setPageExitX] = useState(null);
  const [pageExitY, setPageExitY] = useState(null);
  const [planetIndex, setPlanetIndex] = useState(null);

  useEffect(() => {
    setPageExitColor(null);
  }, [explore]);
  function handleClick() {
    setExplore((prevState) => !prevState);
  }

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    function handleScroll(e) {
      var header = document.querySelector(".header");
      var scrollY = window.scrollY;
      if (scrollY * 0.05 > 10) {
        header.style.top = scrollY * 0.05 + "%";
      } else {
        header.style.top = 10 + "%";
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowBack(explore);
  }, [explore, setShowBack]);

  // function planetClick(page) {
  //   navigate(page);
  // }

  function handleMouse(e) {
    // var cursor = document.querySelector(".cursor");
    // cursor.style.left = e.pageX + "px";
    // cursor.style.top = e.pageY + "px";

    document.querySelectorAll(".landing .planet-img").forEach((element) => {
      const speed = element.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 250;
      const y = (window.innerHeight - e.pageY * speed) / 250;
      element.style.transform = `translate(${x}px) translateY(${y}px)`;
    });
  }
  const setPage = (e, planet, ind) => {
    setPageExitX(e.clientX);
    setPageExitY(e.clientY);
    setPageExitColor(planet.color);
    setPlanetIndex(planet);
    setTimeout(() => {
      navigate(planet.route);
    }, 1500);
  };
  return (
    <div
      className={`zi-top landing container-fluid vh-100 animate__fast overflow-hidden animate__animated animated__fadeIn ${
        transitionAnimation === "aboutUs" && "animate__fadeInDown"
      } ${transitionAnimation === "landing" && "animate__fadeOutUp"} ${
        explore ? "rotatebg" : "nebula-bg"
      }`}
      onMouseMove={handleMouse}
    >
      {/* <div className="nebula-bg" style={{ overflow: "hidden" }}>
        <img
          style={{ width: "100%", height: "100vh", minWidth: "1000px" }}
          className={`nebulaimg ${explore ? "rotatebg" : ""}`}
          src={nebulaBg}
          alt="not found"
        /> 
      </div> */}
      {
        <div
          className={`position-relative zi-top col-8 offset-2  ${
            explore ? "h-auto" : "h-100"
          } d-none d-md-flex d-flex flex-column justify-content-start pb-5 animate__animated animate__fadeIn`}
        >
          <div
            className={`d-flex flex-column align-items-end mx-auto mb-5 ${
              explore ? "h-auto" : "h-100"
            }`}
          >
            <span
              className={`header-large ${
                explore ? "header-small mt-5 pt-5" : ""
              }`}
            >
              PECFEST
            </span>
            {!explore && (
              <span className="text-white mb-auto main_font display-5 header-subscript">
                15-17 April 2022
              </span>
            )}
          </div>
        </div>
      }

      <div className="position-relative zi-top col-12 h-100 d-flex d-md-none flex-column justify-content-start animate__animated animate__fadeIn">
        <div className="d-flex flex-column align-items-center justify-content-start mx-auto header-large text-white">
          <span>PECFEST</span>
          <span style={{fontSize:"5vw"}} className="mt-1">15-17 April 2022</span>
        </div>
      </div>

      <StarsBg />

      {/* Back Button */}
      {showBack && (
        <div
          className={`zi-top d-none d-md-flex position-absolute bottom-0 start-0 ps-3 mb-n1 cursor-pointer animate__animated ${
            explore ? "animate__bounceInUp" : "animate__bounceOutDown"
          } `}
          onClick={() => setExplore(false)}
        >
          <img src={BackImg} alt="Back" width="100px" />
        </div>
      )}

      {explore && pageExitX && pageExitY && (
        <ExpandingCircle
          initX={pageExitX}
          initY={pageExitY}
          color={pageExitColor}
          text={planetIndex.text}
        />
      )}
      <div
        className={`d-flex flex-row position-absolute top-0 start-0 vw-100 vh-100 `}
      >
        {planets.map((planet, ind) => (
          <div
            onMouseEnter={() => {
              setHoveredPlanet(ind + 1);
            }}
            onMouseLeave={() => {
              setHoveredPlanet(null);
            }}
            onClick={(e) => {
              if (explore) {
                setPage(e, planet, ind);
              }
            }}
            data-speed={planet.speed}
            className={`d-none d-md-flex flex-grow-1 img${ind + 1} planet-img ${
              explore ? "alignCenter mt-0 cursor-pointer " : ""
            } ${hoveredPlanet === ind + 1 && "larger-planet"} `}
          >
            {explore ? (
              <h3 className="d-none d-md-flex ">{planet.text}</h3>
            ) : (
              <></>
            )}
          </div>
        ))}
        {planets.map((planet, ind) => (
          <div
            onMouseEnter={() => {
              setHoveredPlanet(ind + 1);
            }}
            onMouseLeave={() => {
              setHoveredPlanet(null);
            }}
            onClick={(e) => {
              if (explore) {
                setPage(e, planet, ind);
              }
            }}
            data-speed={planet.speed}
            className={`d-flex d-md-none flex-grow-1 img${ind + 1} planet-img `}
          >
            {explore ? (
              <h3 className="d-none d-md-flex ">{planet.text}</h3>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
      <div className="cursor"></div>

      {!explore && (
        <div className="d-none d-md-flex explore start-50 translate-middle zi-top cursor-pointer ">
          <div
            className="d-flex flex-row align-items-center animate__animated animate__fadeInUp"
            onClick={handleClick}
          >
            <span className="left-arrow">
              <FontAwesomeIcon
                icon={faAnglesRight}
                className="m-0 p-0 animate__animated animate__infinite animate__headShake"
                size="2x"
                color="white"
              />
            </span>
            <span className="px-3">Explore</span>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="m-0 p-0 animate__animated animate__infinite animate__headShake"
              size="2x"
              color="white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetNav;
