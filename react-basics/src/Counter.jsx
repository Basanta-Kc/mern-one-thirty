import { UserContext } from "./App";
import "./App.css";
import { useContext, useReducer } from "react";

// useState, useEffect( celanup) , useREducer (userQuery), useRef, useCallback, useMemo, useContext

function reducer(state, action) {
  // console.log({ state, action });
  // if (action.type === "increment") {
  //   return state + 1;
  // } else if (action.type === "decrement") {
  //   return state - 1;
  // }
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }

  throw Error("Unknown action: " + action.type);
}

function Counter() {
  const { user, makeAdmin } = useContext(UserContext);

  // access user here
  // const [count, setCount] = useState(0);
  // { count : 4}
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const incrementCountByOne = () => {
    // setcount(count + 1)
    dispatch({ type: "increment" });
  };

  const decrementCountByOne = () => {
    // setCount(count - 1);
    dispatch({ type: "decrement" });
  };

  return (
    <>
      <button
        disabled={!user.isAdmin}
        style={{
          color: "red",
        }}
        onClick={incrementCountByOne}
      >
        +
      </button>
      <p>Count: {state.count}</p>
      <button onClick={decrementCountByOne}>-</button>
      <br></br>
      <button
        onClick={() => {
          makeAdmin();
        }}
      >
        Make Admin
      </button>
    </>
  );
}

export default Counter;
