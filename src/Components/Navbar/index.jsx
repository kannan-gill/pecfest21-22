import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
  faBars,
  faCalendar,
  faDesktop,
  faDollar,
  faDrum,
  faHouse,
  faInfoCircle,
  faLightbulb,
  faPhone,
  faRocket,
  faShirt,
  faUserGroup,
  faXmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import pecfest_logo from "../../Images/pecfest_logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config";
import UserDropdown from "./UserDropdown";
import PecfestId from "./PecfestId";

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

const Navbar = ({ alwaysOpenOnLarge }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRightSideClick = (e) => {
    if (!alwaysOpenOnLarge) {
      e.stopPropagation();
      setIsNavOpen(false);
    }
  };
  const [closeNavAnimation, setCloseNavAnimation] = useState(false);
  useEffect(() => {
    if (isNavOpen) {
      if (!closeNavAnimation) {
        setCloseNavAnimation(true);
      }
    }
  }, [isNavOpen]);

  const NavElement = (route, ind) => {
    return (
      <div
        key={ind}
        onClick={() => {
          navigate(route.route);
          setIsNavOpen(false);
        }}
        className={`cursor-pointer px-3 my-1 py-2 ${styles.nav_item} ${
          (location.pathname === route.route ||
            (location.pathname.includes("competitions") &&
              route.route === "/competitions") ||
            ((location.pathname.includes("workshops") ||
              location.pathname.includes("megashows")) &&
              route.route === "/events")) &&
          styles.nav_item_active
        } ${location.pathname === route.route && "py-2 my-1"}`}
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
  const DividerElement = (route, ind) => {
    return (
      <div
        className="position-relative mt-3 ms-2"
        key={`divider-${route.text}`}
      >
        &nbsp;
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
  const CommonNavBarComponent = () => {
    return (
      <>
        <div className="d-flex flex-column overflow-none justify-content-start  ">
          <div className="d-flex justify-content-between align-items-center px-3 pt-4 pb-0 text-white">
            <div className="d-flex flex-row">
              <img
                src={pecfest_logo}
                className={`${styles.pecfest_logo} main_font cursor-pointer`}
                alt="pecfest logo"
                onClick={() => navigate("/")}
              />
              <div className="d-flex flex-column ms-2">
                <h4 className="main_font mb-0 pb-0">PECFEST</h4>
                {user && <div className="d-flex flex-row align-items-center"><PecfestId color="#fec007" iconColor="#0f1113"/></div>}
              </div>
            </div>
            {!alwaysOpenOnLarge && (
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faXmark}
                color="white"
                size="2x"
                onClick={() => setIsNavOpen(false)}
              />
            )}
            {alwaysOpenOnLarge && (
              <FontAwesomeIcon
                className="cursor-pointer d-block d-md-none"
                icon={faXmark}
                color="white"
                size="2x"
                onClick={() => setIsNavOpen(false)}
              />
            )}
          </div>
        </div>
        <div
          className="overflow-auto flex-grow-1 d-flex flex-column pe-3 mb-3"
          onWheel={(event) => {
            event.stopPropagation();
          }}
        >
          {routes.map((route, ind) =>
            route.type ? DividerElement(route, ind) : NavElement(route, ind)
          )}
        </div>
      </>
    );
  };
  const downloadBrochure = () => {
    const storage = getStorage();
    getDownloadURL(ref(storage, "Marketing Brochure.pdf"))
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
          saveBlob(blob, "Brochure.pdf");
        };
        xhr.open("GET", url);
        xhr.send();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveBlob = (blob, fileName) => {
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.dispatchEvent(new MouseEvent("click"));
  };
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingLogoutUser, setLoadingLogoutUser] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUser(userRes);
        setLoadingUser(false);
        // navigate("/");
      } else {
        setLoadingUser(false);
        setUser(null);
      }
    });
    return cleanUp;
  }, []);
  const signOutHandler = () => {
    setLoadingLogoutUser(true);
    signOut(auth)
      .then(() => {
        if (location.pathname !== "/") {
          navigate("/");
          return;
        }

        // Sign-out successful.
        setTimeout(() => {
          setLoadingLogoutUser(false);
        }, 500);
      })
      .catch((error) => {
        // An error happened.
        setLoadingLogoutUser(false);
      });
  };

  return (
    <>
      {/* Login button and Brochure button*/}
      {!loadingUser && (
        <>
          <div className="position-absolute top-0 end-0 zi-top animate__animated animate__fadeIn animate__fast">
            <div className="d-flex flex-row align-items-center">
              <Button
                onClick={() => {
                  downloadBrochure();
                }}
                className={`fw-bold my-4 mx-2 transition-smooth ${styles.brochure}`}
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" size="1x" />
                Brochure
              </Button>
              {loadingLogoutUser ? (
                <Button
                  className={`animate__animated fw-bold px-3 my-4 mx-2`}
                  onClick={() => {
                    if (user) {
                      signOutHandler();
                    } else {
                      navigate("/login");
                    }
                  }}
                  variant="warning"
                  style={{
                    borderRadius: "5em",
                  }}
                >
                  <Spinner
                    animation="border"
                    variant="dark"
                    size="sm"
                    className="mx-4"
                  />
                </Button>
              ) : user ? (
                <UserDropdown user={user} signOutHandler={signOutHandler} />
              ) : (
                <Button
                  className={`animate__animated fw-bold px-3 my-4 mx-2`}
                  onClick={() => {
                    if (user) {
                      signOutHandler();
                    } else {
                      navigate("/login");
                    }
                  }}
                  variant="warning"
                  style={{
                    borderRadius: "5em",
                  }}
                >
                  <FontAwesomeIcon icon={faRocket} className="me-2" size="1x" />
                  Login
                </Button>
              )}
            </div>
          </div>

          <div className="position-absolute top-0 start-0 text-white zi-top animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faBars}
              color="white"
              size="2x"
              className="p-4 cursor-pointer"
              onClick={() => {
                setIsNavOpen(true);
              }}
            />
          </div>
          <div
            className="d-flex flex-row row "
            onWheel={(event) => {
              event.stopPropagation();
            }}
          >
            {alwaysOpenOnLarge && (
              <div
                className={`position-absolute top-0 d-none d-md-flex flex-column start-0 zi-top h-100 ${
                  styles.nav_item_container
                } col-sm-12 col-md-6 col-lg-3 col-xl-3 animate__animated animate__faster ${
                  !alwaysOpenOnLarge && !closeNavAnimation && "invisible"
                } ${
                  isNavOpen || alwaysOpenOnLarge
                    ? "animate__slideInLeft"
                    : "animate__slideOutLeft"
                }`}
              >
                <CommonNavBarComponent />
              </div>
            )}

            <div
              className={`position-absolute top-0 ${
                alwaysOpenOnLarge && "d-flex d-md-none"
              } flex-column start-0 zi-top h-100 ${
                styles.nav_item_container
              } col-sm-12 col-md-6 col-lg-3 col-xl-3 animate__animated animate__faster ${
                !closeNavAnimation && "invisible"
              } ${
                isNavOpen ? "animate__slideInLeft" : "animate__slideOutLeft"
              }`}
            >
              <CommonNavBarComponent />
            </div>
            {!alwaysOpenOnLarge && isNavOpen && (
              <div
                className="position-absolute zi-top top-0 end-0 d-none d-md-flex col-md-6 col-lg-9 col-xl-9 vw-75 h-100"
                onClick={handleRightSideClick}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
