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
import { generatePecfestId } from "services";

export const VerificationModalContext = createContext(null);

const { Provider } = VerificationModalContext;

const VerificationModalProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const { user, reloadUserObj } = useContext(AuthContext);

  const openVerificationModal = () => {
    if (!(user.emailVerified && user.pecfestId)) {
      setIsModalOpen(true);
    }
  };

  const closeVerificationModal = () => {
    setIsModalOpen(false);
  };

  const checkVerification = async (showError=true) => {
    await reloadUserObj();
    if (user?.emailVerified && !user.pecFestId) {
      await generatePecfestId(user.id);
      toast.success("Your PECFEST ID has been generated");
      return true;
    }
    else if (!user?.emailVerified && showError) {
      toast.error("Please verify your email first");
    }
    return false;
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

  const resetEmailHandler = async () => {
    if (!await checkVerification(false)) {
      setIsLoading(true);
      sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/verifyEmail/${user.id}`,
      })
        .then((res) => {
          closeVerificationModal();
          const intervalRef = setInterval(() => {
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
          }, 1000);
          setIsLoading(false);
          toast.success("Email sent successfully!", { autoClose: 2000 });
        })
        .catch((error) => {
          const intervalRef = setInterval(() => {
            setCountdown((prevCountdown) => {
              if (prevCountdown === null) {
                return 20;
              } else if (prevCountdown > 1) {
                return prevCountdown - 1;
              } else {
                clearInterval(intervalRef);
                return null;
              }
            });
          }, 1000);
          setIsLoading(false);
          toast.error("Try again in some time");
        });
    }
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
        content={
          <>
            An email has been sent to your registered email address.
            <br />
            <br />
            PLEASE VERIFY TO GENERATE YOUR PECFEST ID.
            <br />
            <br />
            <small>
              <i>
                Already verified?&nbsp;
                <span
                  className="cursor-pointer"
                  style={{ color: "#FFCA2C" }}
                  onClick={checkVerification}
                >
                  Click here
                </span>
              </i>
            </small>
          </>
        }
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
