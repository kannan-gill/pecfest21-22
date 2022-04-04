import React, { useEffect, useState } from "react";
import styles from "./RegisterLogin.module.css";
import { Container } from "react-bootstrap";
import LoginFlipCard from "../../Components/LoginFlipCard/LoginFlipCard";
import BackButton from "../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import Navbar from "Components/Navbar";
import ComingSoon from "Pages/ComingSoon/ComingSoon";
import StarsBg from "Components/StarsBg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";

function RegisterLogin({
  isRegister = false,
  setIsNavbarVisible,
  redirect = null,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    setIsNavbarVisible(false);
    const setVisible = () => {
      setIsNavbarVisible(true);
    };
    return setVisible;
  }, []);
  const clickHandler = () => {
    navigate("/");
  };

  const [user, setUser] = useState("placeholderUser");
  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUser(userRes);
        navigate("/");
      } else {
        setUser(null);
      }
    });
    return cleanUp;
  }, []);

  return (
    <>
      {!user && (
        <Container
          fluid
          className="p-0 m-0 vh-100 animate__animated animate__fadeIn"
        >
          <div
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2Flogin_register_bg.jpg?alt=media&token=db5d9a10-5c7d-40a4-a571-e27910915c8f')",
            }}
            className={`vw-100 vh-100 ${styles.bg_img}`}
          >
            {/* <Navbar/> */}
            <BackButton
              classes={styles.back_button}
              clickHandler={clickHandler}
            />
            <LoginFlipCard redirect={redirect} isRegister={isRegister} />
          </div>
          <StarsBg />
        </Container>
      )}
    </>
  );
}

export default RegisterLogin;
