import { useState, useEffect, createContext } from "react";
import { auth } from "../config";
import { getUserByEmail, getUserByEmailLive } from "../services";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const useAuthHandler = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cleanUpFuncInternal = null;
    const cleanUp = onAuthStateChanged(auth, async (userRes) => {
      if (userRes) {
        // const userData = await getUserByEmail(userRes.email);
        cleanUpFuncInternal = getUserByEmailLive(userRes.email, (userData) => {
          setUser({ ...userData, emailVerified: userRes.emailVerified });
        });
      } else {
        setUser(null);
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

  return [user, setUser];
};

const { Provider } = AuthContext;

const AuthProvider = (props) => {
  const [user, setUser] = useAuthHandler();

  return <Provider value={user}>{props.children}</Provider>;
};

export default AuthProvider;
