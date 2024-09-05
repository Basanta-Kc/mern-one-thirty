import { createContext, useContext } from "react";
import "./App.css";
import { Products } from "./Products";
export const GrandParentContext = createContext(null);

function Children({ parentName }) {
  const grandParentName = useContext(GrandParentContext);

  return (
    <>
      <p>
        My father name is: {parentName}, grand parent name is :{grandParentName}{" "}
      </p>
    </>
  );
}

function Parent() {
  const parentName = "Parent Kc";
  return (
    <>
      <Children parentName={parentName} />
    </>
  );
}

function GrandParent() {
  const value = useContext(GrandParentContext);
  return <Parent grandParentName={value} />;
}

function App() {
  return (
    <>
      <GrandParentContext.Provider value="Grand Parent Kc">
        <Products />
        <GrandParent />
      </GrandParentContext.Provider>
    </>
  );
}

export default App;
