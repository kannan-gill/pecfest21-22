import React, { useEffect, useState } from "react";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import BackImg from "../../Images/back-img.png";
import useAnimatedRenderer from "hooks/useAnimatedRenderer";
import ExpandingCircle from "Components/ExpandingCircle";

const planets = [
  {
    route: "/brochure",
    text: "Brochure",
    speed: "2",
    color: "yellow",
  },
  {
    route: "/events",
    text: "Events",
    speed: "-2",
    color: "#07202a",
  },
  {
    route: "/competitions",
    text: "Competitions",
    speed: "1",
    color: "red",
  },
  {
    route: "/merchandise",
    text: "Merchandise",
    speed: "-1",
    color: "purple",
  },
  {
    route: "/schedule",
    text: "Schedule",
    speed: "3",
    color: "pink",
  },
];

const PlanetNav = ({ transitionAnimation, setIsLoading, bgVideo }) => {
  const [explore, setExplore] = useState(false);
  const [showBack, setShowBack] = useAnimatedRenderer(explore);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [pageExitColor, setPageExitColor] = useState(null);
  const [pageExitX, setPageExitX] = useState(null);
  const [pageExitY, setPageExitY] = useState(null);

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
  const setPage = (route) => {
    setTimeout(()=>{
      navigate(route);
    },1000);
    
  };
  return (
    <div
      className={`landing vh-100 animate__fast overflow-hidden animate__animated animated__fadeIn ${
        transitionAnimation === "aboutUs" && "animate__slideInDown"
      } ${transitionAnimation === "landing" && "animate__slideOutUp"}`}
      onMouseMove={handleMouse}
    >
      <video
        className="animate__animated animated__fadeIn"
        onCanPlayThrough={() => setIsLoading(false)}
        autoPlay
        muted
        loop
        src={bgVideo}
      />
      <div className={`header ${explore ? "headerRemove" : ""}`}>
        PECFEST'22
      </div>

      {/* Back Button */}
      {showBack && (
        <div
          className={`position-absolute bottom-0 start-0 ps-3 mb-n1 cursor-pointer animate__animated ${
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
        />
      )}
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
              setPageExitX(e.clientX);
              setPageExitY(e.clientY);
              setPageExitColor(planet.color);
              setPage(planet.route)
            }
          }}
          data-speed={planet.speed}
          className={`cursor-pointer img${ind + 1} planet-img ${
            explore ? "alignCenter" : ""
          } ${hoveredPlanet === ind + 1 && "larger-planet"}  `}
        >
          {explore ? (
            <h3 className="position-absolute top-50 start-50 translate-middle">
              {planet.text}
            </h3>
          ) : (
            <></>
          )}
        </div>
      ))}
      <div className="cursor"></div>

      {!explore && (
        <div
          className="explore cursor-pointer animate__animated animate__fadeInUp"
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
      )}
    </div>
  );
};

export default PlanetNav;
