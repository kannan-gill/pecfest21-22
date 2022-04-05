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
  const [operation, setOperation] = useState(null);
  const { user, reloadUserObj } = useContext(AuthContext);

  const openVerificationModal = () => {
    if (!(user.emailVerified && user.pecfestId)) {
      setIsModalOpen(true);
    }
  };

  const closeVerificationModal = () => {
    setIsModalOpen(false);
  };

  const checkVerification = (op) => {
    setOperation(op);
    reloadUserObj();
  };

  const pecfestIdGenerationHandler = async () => {
    if (user?.emailVerified && !user.pecFestId) {
      generatePecfestId(user.id).then(() => {
        toast.success("Your PECFEST ID has been generated");
        setOperation(null);
      });
    } else if (!user?.emailVerified) {
      toast.error("Please verify your email first");
      setOperation(null);
    }
  };

  const sendEmailHandler = async () => {
    if (!user?.emailVerified) {
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
          setOperation(null);
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
          setOperation(null);
          toast.error("Try again in some time");
        });
    }
    else {
      generatePecfestId(user.id).then(() => {
        toast.success("Your PECFEST ID has been generated");
      });
      setOperation(null);
    }
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, async (userRes) => {
      if (userRes) {
        if (!(user?.emailVerified && user.pecFestId)) {
          openVerificationModal();
        }
      }
    });
    return cleanUp;
  }, []);

  useEffect(() => {
    console.log("on user change", user);
    if (user?.emailVerified && user.pecFestId) {
      closeVerificationModal();
    } else {
      if (operation === "generate") {
        pecfestIdGenerationHandler();
      }
      else if (operation === "sendEmail") {
        sendEmailHandler();
      }
    }
  }, [user]);

  const auth = getAuth();

  const resetEmailHandler = () => {
    setIsLoading(true);
    checkVerification("sendEmail");
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
                  onClick={() => checkVerification("generate")}
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
