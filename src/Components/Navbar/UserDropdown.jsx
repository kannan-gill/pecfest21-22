import React, { useContext } from "react";
import {
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightFromBracket,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { VerificationModalContext } from "../../context/VerificationModalContext";
import styles from "./UserDropdown.module.css";
import PecfestId from "./PecfestId";

const UserDropdown = ({ user, signOutHandler }) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { openVerificationModal } = useContext(VerificationModalContext);

  return (
    <>

      {authContext && (
        <Dropdown className="ps-1 pe-3 mt-2">
          <Dropdown.Toggle className={`${styles.dropDown}`}>
            <FontAwesomeIcon icon={faUser} />
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <div
              className={`d-flex flex-column align-items-start ps-3 ${styles.dropdownMenu}`}
            >
              <h6>Hi, {authContext["name"]}!</h6>
              <div className="d-flex flex-row justify-content-between align-items-center w-100 pe-1 pb-1">
                <PecfestId color="white" iconColor="#343a40"/>
              </div>
            </div>
            <hr className="p-0 m-2 w-75 m-auto my-1"></hr>
            {!authContext?.emailVerified && (
              <Dropdown.Item
                className={`${styles.dropdownItem}`}
                as="button"
                onClick={() => {
                  openVerificationModal();
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="pe-2"
                ></FontAwesomeIcon>
                Verification Pending
              </Dropdown.Item>
            )}
            <Dropdown.Item
              className={`${styles.dropdownItem}`}
              as="button"
              onClick={() => {
                if (user) {
                  signOutHandler();
                } else {
                  navigate("/login");
                }
              }}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="pe-2"
              ></FontAwesomeIcon>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default UserDropdown;
