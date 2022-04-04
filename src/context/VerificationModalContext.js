import { useState, useEffect, createContext, useContext } from "react";
import React from "react";
import { toast } from "react-toastify";
import {
  sendEmailVerification,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import ModalCard from "Components/ModalCard/ModalCard";
import { AuthContext } from "./AuthContext";

export const VerificationModalContext = createContext(null);

const { Provider } = VerificationModalContext;

const VerificationModalProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [intervalRef, setIntervalRef] = useState(null);
  const { user } = useContext(AuthContext);

  const openVerificationModal = () => {
    if (!user?.emailVerified) {
      setIsModalOpen(true);
    }
  };

  const closeVerificationModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, async (userRes) => {
      if (userRes) {
        if (!userRes.emailVerified) {
          openVerificationModal();
        }
      }
    });
    return cleanUp;
  }, []);

  useEffect(() => {
    if (user?.emailVerified) {
      closeVerificationModal();
    }
  }, [user]);

  const auth = getAuth();

  const resetEmailHandler = () => {
    setIsLoading(true);
    sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/verifyEmail/${user.id}`,
    })
      .then((res) => {
        closeVerificationModal();
        setIntervalRef(
          setInterval(() => {
            setCountdown((prevCountdown) => {
              if (prevCountdown === null) {
                return 60;
              } else if (prevCountdown > 1) {
                return prevCountdown - 1;
              } else {
                clearInterval(intervalRef);
                return null;
              }
            });
          }, 1000)
        );
        setIsLoading(false);
        toast.success("Email sent successfully!", { autoClose: 2000 });
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Try again in some time");
      });
  };

  return (
    <Provider
      value={{
        openVerificationModal,
        closeVerificationModal,
        isVerificationModalOpen: isModalOpen,
      }}
    >
      {props.children}

      <ModalCard
        title="Verify Account"
        content="An email has been sent to your registered email address.<br/><br/>
        PLEASE VERIFY TO GENERATE YOUR PECFEST ID."
        isLoading={isLoading}
        buttonTitle={`Resend Email${
          countdown !== null ? ` (${countdown})` : ""
        }`}
        buttonHandler={resetEmailHandler}
        show={isModalOpen}
        disabled={countdown !== null}
        setModalShow={setIsModalOpen}
      />
    </Provider>
  );
};

export default VerificationModalProvider;
