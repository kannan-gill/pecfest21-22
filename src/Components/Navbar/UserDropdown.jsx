import React, { useContext, useState } from "react";
import {
  Dropdown,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightFromBracket,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendEmailVerification, getAuth } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import styles from "./UserDropdown.module.css";
import ModalCard from "Components/ModalCard/ModalCard";
import PecfestId from "./PecfestId";

const UserDropdown = ({ user, signOutHandler }) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const resetEmailHandler = () => {
    setIsLoading(true);
    sendEmailVerification(auth.currentUser, { url: window.location.origin })
      .then((res) => {
        setModalShow(false);
        setIsLoading(false);
        toast.success("Email sent successfully!", { autoClose: 2000 });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setIsLoading(false);
        toast.error(errorMessage);
      });
  };

 

  return (
    <>
      <ModalCard
        title="Verify Account"
        content="An email has been sent to your registered account. Please verify."
        isLoading={isLoading}
        buttonTitle="Resend Email"
        buttonHandler={resetEmailHandler}
        show={modalShow}
        setModalShow={setModalShow}
      />

      {authContext && (
        <Dropdown className="ps-1 pe-3 ">
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
            {!authContext["emailVerified"] && (
              <Dropdown.Item
                className={`${styles.dropdownItem}`}
                as="button"
                onClick={() => {
                  setModalShow(true);
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
