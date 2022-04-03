import { useState, useEffect, createContext, useContext } from "react";
import React from "react";
import { toast } from "react-toastify";
import { sendEmailVerification, getAuth, onAuthStateChanged } from "firebase/auth";
import ModalCard from "Components/ModalCard/ModalCard";
import { AuthContext } from "./AuthContext";

export const VerificationModalContext = createContext(null);

const { Provider } = VerificationModalContext;

const VerificationModalProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(AuthContext);

  const openVerificationModal = () => {
    setIsModalOpen(true);
  };

  const closeVerificationModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, async (userRes) => {
      if (userRes) {
        if(!userRes.emailVerified){
          openVerificationModal();
        }
      }
    });
    return cleanUp;
  }, []);

  const auth = getAuth();
  
  const resetEmailHandler = () => {
    setIsLoading(true);
    sendEmailVerification(auth.currentUser, { url: `${window.location.origin}/verifyEmail/${user.id}` })
      .then((res) => {
        closeVerificationModal();
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
        buttonTitle="Resend Email"
        buttonHandler={resetEmailHandler}
        show={isModalOpen}
        setModalShow={setIsModalOpen}
      />
    </Provider>
  );
};

export default VerificationModalProvider;
