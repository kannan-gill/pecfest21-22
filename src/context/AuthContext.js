import { useState, useEffect, createContext } from "react";
import { auth } from "../config";
import { getUserByEmail } from "../services";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const useAuthHandler = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, async (userRes) => {
      if (userRes) {
        const userData = await getUserByEmail(userRes.email);
        setUser({ ...userData, emailVerified: userRes.emailVerified });
      } else {
        setUser(null);
      }
    });
    return cleanUp;
  }, []);

  return [
    user,
    setUser,
  ];
};

const { Provider } = AuthContext;

const AuthProvider = (props) => {
  const [user, setUser] = useAuthHandler();

  return <Provider value={{ user, setUser }}>{props.children}</Provider>;
};

export default AuthProvider;
