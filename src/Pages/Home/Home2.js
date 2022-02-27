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
import Loading from "../../Components/Loading";
import { useNavigate } from "react-router-dom";

function Home2() {
  const [explore, setexplore] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [transitionAnimation, setTransitionAnimation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  function handleClick() {
    setexplore(!explore);
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
  function planetClick(page) {
    navigate(page);
  }

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
    <Loading isLoading={isLoading}>
      <div
        className="vh-100 w-100 animate__animated animated__fadeIn overflow-hidden"
        onWheel={scrollHandler}
      >
        <Navbar />
        {(currentPage === "landing" || transitionAnimation === "landing") && (
          <section
            className={`landing vh-100 animate__fast overflow-hidden animate__animated animated__fadeIn ${
              transitionAnimation === "aboutUs" && "animate__slideInDown"
            } ${transitionAnimation === "landing" && "animate__slideOutUp"}`}
            onMouseMove={handleMouse}
          >
            <video
              onCanPlayThrough={() => setIsLoading(false)}
              autoPlay
              muted
              loop
            >
              <source src="../../Images/spacebgvid1.mp4" type="video/mp4" />
            </video>
            <div className={`header ${explore ? "headerRemove" : ""}`}>
              PECFEST'22
            </div>
            {explore && (
              <div className="exploreBack" onClick={() => setexplore(false)}>
                <i class="fa-solid fa-2x fa-angle-left"></i>
              </div>
            )}
            <div
              data-speed="2"
              className={`img1 planet-img ${explore ? "alignCenter" : ""}`}
            >
              {explore ? (
                <h3 onClick={() => navigate("/AboutPecfest")}>About Pecfest</h3>
              ) : (
                <></>
              )}
            </div>
            <div
              data-speed="-2"
              className={`img2 planet-img ${explore ? "alignCenter" : ""}`}
            >
              {explore ? (
                <h3 onClick={() => navigate("/events")}>Events</h3>
              ) : (
                <></>
              )}
            </div>
            <div
              data-speed="1"
              className={`img3 planet-img ${explore ? "alignCenter" : ""}`}
            >
              {explore ? (
                <h3 onClick={() => navigate("/competitions")}>Competitions</h3>
              ) : (
                <></>
              )}
            </div>
            <div
              data-speed="-1"
              className={`img4 planet-img ${explore ? "alignCenter" : ""}`}
            >
              {explore ? (
                <h3 onClick={() => navigate("/sponsors")}>Sponsors</h3>
              ) : (
                <></>
              )}
            </div>
            <div
              data-speed="3"
              className={`img5 planet-img ${explore ? "alignCenter" : ""}`}
            >
              {explore ? (
                <h3 onClick={() => navigate("/team")}>Team</h3>
              ) : (
                <></>
              )}
            </div>
            {explore && (
              <div data-speed="2" className="otherMenu">
                <h3 onClick={() => navigate("/brochure")}>Brochure</h3>
                <h3 onClick={() => navigate("/merchandise")}>Merchandise</h3>
                <h3 onClick={() => navigate("/contactUs")}>Contact Us</h3>
              </div>
            )}
            <div className="cursor">
             
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
    </Loading>
  );
}

export default Home2;
