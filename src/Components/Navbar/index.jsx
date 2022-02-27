import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faCalendar,
  faDesktop,
  faDollar,
  faDrum,
  faDrumstickBite,
  faHouse,
  faInfoCircle,
  faLightbulb,
  faPhone,
  faRocket,
  faShirt,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const routes = [
  {
    type: "divider",
    text: "General",
  },
  {
    route: "/",
    text: "Home",
    icon: faHouse,
  },
  {
    route: "/aboutUs",
    text: "About Us",
    icon: faInfoCircle,
  },
  {
    route: "/sponsors",
    text: "Sponsors",
    icon: faDollar,
  },
  {
    route: "/merchandise",
    text: "Merchandise",
    icon: faShirt,
  },
  {
    type: "divider",
    text: "offerings",
  },
  {
    route: "/brochure",
    text: "Brochure",
    icon: faBook,
  },
  {
    route: "/schedule",
    text: "Schedule",
    icon: faCalendar,
  },
  {
    route: "/events",
    text: "Events",
    icon: faDrum,
  },
  {
    route: "/competitions",
    text: "Competitions",
    icon: faLightbulb,
  },

  {
    type: "divider",
    text: "Know us",
  },
  {
    route: "/team",
    text: "Team",
    icon: faUserGroup,
  },
  {
    route: "/developer",
    text: "Developers",
    icon: faDesktop,
  },
  {
    route: "/contact",
    text: "Contact Us",
    icon: faPhone,
  },
];
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRightSideClick = (e) => {
    e.stopPropagation();
    setIsNavOpen(false);
  };
  const [closeNavAnimation, setCloseNavAnimation] = useState(false);
  useEffect(() => {
    if (isNavOpen) {
      if (!closeNavAnimation) {
        setCloseNavAnimation(true);
      }
    }
  }, [isNavOpen]);

  const NavElement = (route) => {
    return (
      <div
        onClick={() => {
          navigate(route.route);
        }}
        className={`cursor-pointer px-3 my-2 py-1 ${styles.nav_item} ${
          location.pathname === route.route && styles.nav_item_active
        } ${location.pathname === route.route && "py-2"}`}
      >
        <FontAwesomeIcon
          icon={route.icon}
          color="white"
          size="1x"
          className="me-3 cursor-pointer fa-fw"
          onClick={() => setIsNavOpen(true)}
        />
        {route?.text}
      </div>
    );
  };
  const DividerElement = (route) => {
    return (
      <div className="position-relative mt-3">
        .
        <span
          className={`position-absolute start-0 bottom-0 translate-middle zi-2 ps-5 pt-0 pe-2 ${styles.nav_item_heading}`}
        >
          {(route?.text).toUpperCase()}
        </span>
        <hr
          className={`p-0 m-0 position-absolute top-50 translate-middle w-100 start-50 zi-1 ${styles.nav_item_line}`}
        />
      </div>
    );
  };

  return (
    <>
      {/* Login button */}
      <div className="position-absolute top-0 end-0 zi-top ">
        <Button
          onClick={()=>{
            navigate("/login");
          }}
          variant="warning"
          className="fw-bold px-3 m-4"
          style={{
            borderRadius: "5em",
          }}
        >
          <FontAwesomeIcon icon={faRocket} className="me-2" size="1x" />
          Login
        </Button>
      </div>
      <div className="position-absolute top-0 start-0 vh-100 text-white zi-top animate__animated animate__fadeIn">
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          size="2x"
          className="p-4 cursor-pointer"
          onClick={() => setIsNavOpen(true)}
        />
      </div>
      <div className="d-flex flex-row row ">
        <div
          className={`position-absolute top-0 start-0 zi-top h-100 ${
            styles.nav_item_container
          } col-sm-12 col-md-6 col-lg-3 col-xl-3 animate__animated animate__faster ${
            !closeNavAnimation && "invisible"
          } ${isNavOpen ? "animate__slideInLeft" : "animate__slideOutLeft"}`}
        >
          <div className="d-flex flex-column overflow-auto justify-content-start">
            <div className="d-flex justify-content-between align-items-center px-3 pt-4 pb-0 text-white">
              <h4 className="display-6 fw-bold">PECFEST</h4>
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faXmark}
                color="white"
                size="2x"
                onClick={() => setIsNavOpen(false)}
              />
            </div>
          </div>
          <div
            className="overflow-auto h-100 pe-3"
            onWheel={(event) => {
              event.stopPropagation();
            }}
          >
            {routes.map((route) =>
              route.type ? DividerElement(route) : NavElement(route)
            )}
          </div>
        </div>
        {isNavOpen && (
          <div
            className="position-absolute zi-top top-0 end-0 d-sm-none d-md-flex col-md-6 col-lg-9 col-xl-9 vw-75 h-100"
            onClick={handleRightSideClick}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
