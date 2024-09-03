import "./App.css";
import { useReducer } from "react";

// useState, useEffect( celanup) , useREducer (userQuery), useRef, useCallback, useMemo, useContext

function reducer(state, action) {
  console.log({ state, action });
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  }
}

function Counter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  const incrementCountByOne = () => {
    // setcount(count + 1)
    dispatch("increment");
  };

  const decrementCountByOne = () => {
    // setCount(count - 1);
    dispatch("decrement");
  };

  return (
    <>
      <button
        style={{
          color: "red",
        }}
        onClick={incrementCountByOne}
      >
        +
      </button>
      <p>Count: {state}</p>
      <button onClick={decrementCountByOne}>-</button>
    </>
  );
}

export default Counter;
