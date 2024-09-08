import { createContext, useState } from "react";
import "./App.css";
import Counter from "./Counter";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "basanta",
    isAdmin: false,
  });

  const makeAdmin = () => {
    setUser({ ...user, isAdmin: true });
  };

  const valueToSend = {
    user,
    makeAdmin,
  };
  // dont use props for sending user.
  return (
    <>
      <UserContext.Provider value={valueToSend}>
        <Counter />
      </UserContext.Provider>
    </>
  );
}

export default App;
