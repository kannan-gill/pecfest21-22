import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Home2.css";
import AboutPecfest from "../../Components/AboutPecfest/AboutPecfest";
import Navbar from "../../Components/Navbar";

function Home2() {
  const [explore, setexplore] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [transitionAnimation, setTransitionAnimation] = useState("");

  function handleClick() {
    setexplore(!explore);
  }

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

  function handleMouse(e) {
    var cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";

    document.querySelectorAll("img").forEach((element) => {
      const speed = element.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 250;
      const y = (window.innerHeight - e.pageY * speed) / 250;
      element.style.transform = `translate(${x}px) translateY(${y}px)`;
    });
  }

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
      className="vh-100 w-100 animate__animated animated__fadeIn overflow-hiden"
      onWheel={scrollHandler}
    >
      <Navbar />
      {(currentPage === "landing" || transitionAnimation === "landing") && (
        <section
          className={`landing vh-100 animate__fast overflow-hidden animate__animated ${
            transitionAnimation === "aboutUs" && "animate__slideInDown"
          } ${transitionAnimation === "landing" && "animate__slideOutUp"}`}
          onMouseMove={handleMouse}
        >
          <video autoPlay muted loop>
            <source src="../../Images/spacebgvid1.mp4" type="video/mp4" />
          </video>
          <div className={`header ${explore ? "headerRemove" : ""}`}>
            PECFEST'21
          </div>
          {explore && (
            <div className="exploreBack" onClick={() => setexplore(false)}>
              <i class="fa-solid fa-2x fa-angle-left"></i>
            </div>
          )}
          <img
            data-speed="2"
            className={`img1 ${explore ? "alignCenter" : ""}`}
            src="../../Images/Untitled.png"
          />
          <img
            data-speed="-2"
            className={`img2 ${explore ? "alignCenter" : ""}`}
            src="../../Images/Untitled2.png"
          />
          <img
            data-speed="1"
            className={`img3 ${explore ? "alignCenter" : ""}`}
            src="../../Images/Untitled3.png"
          />
          <img
            data-speed="-1"
            className={`img4 ${explore ? "alignCenter" : ""}`}
            src="../../Images/Untitled4.png"
          />
          <img
            data-speed="3"
            className={`img5 ${explore ? "alignCenter" : ""}`}
            src="../../Images/Untitled5.png"
          />
          <div className="cursor">
            <img
              className="rocket"
              src="../../Images/rocket.png"
              alt="cant be disp"
            />
          </div>
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
        </section>
      )}
      {(currentPage === "aboutUs" || transitionAnimation === "aboutUs") && (
        <div
          className={`animate__animated animate__fast overflow-hidden bg-dark h-100 position-absolute top-0 start-0 w-100 ${
            transitionAnimation === "landing" && "animate__slideInUp"
          } ${transitionAnimation === "aboutUs" && "animate__slideOutDown"}
        `}
        >
          hi
          <>yo</>
        </div>
      )}

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
