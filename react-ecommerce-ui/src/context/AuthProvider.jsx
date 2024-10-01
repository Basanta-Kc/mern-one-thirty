import "react-toastify/dist/ReactToastify.css";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    return JSON.parse(localStorage.getItem("authUser"));
  });

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <>
      <AuthContext.Provider value={{ setAuthUser, authUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;

// logo ma click garda home page
// order page banauna paro, add order in navbar

// complete product with image
// stripe implementation
//
