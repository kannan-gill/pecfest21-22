import { useState, useEffect, createContext } from "react";
import { auth } from "../config";
import { getUserByEmailLive } from "../services";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";

export const AuthContext = createContext(null);

const useAuthHandler = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanUpFuncInternal = null;
    setIsLoading(true);
    const cleanUp = onAuthStateChanged(auth, async (userRes) => {
      if (cleanUpFuncInternal) {
        cleanUpFuncInternal();
      }
      if (userRes) {
        // const userData = await getUserByEmail(userRes.email);
        cleanUpFuncInternal = getUserByEmailLive(userRes.email, (userData) => {
          auth.currentUser.reload()
          .then(() => {
            const currentUser = auth.currentUser;
            setUser(() => { return { ...userData, emailVerified: currentUser.emailVerified }});
            setIsLoading(false);
          });
        });
      } else {
        setUser(() => null);
        setIsLoading(false);
      }
    });
    const cleanUpFunc = () => {
      cleanUp();
      if (cleanUpFuncInternal) {
        cleanUpFuncInternal();
      }
    };
    return cleanUpFunc;
  }, []);

  const reloadUserObj = async () => {
    if (user) {
      await auth.currentUser.reload();
      const currentUser = auth.currentUser;
      setUser((prevUser) => { return {
        ...prevUser,
        emailVerified: currentUser.emailVerified,
      }});
    }
  };

  return [user, isLoading, reloadUserObj];
};

const { Provider } = AuthContext;

const AuthProvider = (props) => {
  const [user, isLoading, reloadUserObj] = useAuthHandler();

  return (
    <Provider value={{ user, isLoading, reloadUserObj }}>
      {props.children}
    </Provider>
  );
};

export default AuthProvider;
