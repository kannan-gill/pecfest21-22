import React, { useEffect, useContext } from "react";
// being used to invoke the firebase config, DO NOT DELETE
import { } from "../../config";
import RegisterLogin from "../../Pages/RegisterLogin/RegisterLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { VerificationModalContext } from "context/VerificationModalContext";

const PrivateRoutes = ({ children, setIsNavbarVisible }) => {
  const { user, isLoading } = useContext(AuthContext);
  const { openVerificationModal } = useContext(VerificationModalContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (user && !user.emailVerified) {
      const pathToRedirect = location?.pathname.split('/');
      pathToRedirect.pop();
      openVerificationModal();
      navigate(pathToRedirect.join('/'));
    }
  }, [user]);


  return (
    <>
      {isLoading ? (<></>) : (user ? (
        user.emailVerified && children
      ) : (
        <RegisterLogin redirect={location?.pathname} setIsNavbarVisible={setIsNavbarVisible} />
      ))}
    </>
  );
};

export default PrivateRoutes;
