// useEffect(() => { }) => after initial render and state update
// useEffect(() => { }, []) => only once after inital render
// useEffect(() => {}, [count]) => when the value of count varailbe changes
// useEffect => side effect A "side effect" is anything that affects something outside the scope of the function being execute (making api call, subscribing to data stream, dom , localstorage)
// Later: Cleanup Function
import "./App.css";
import { useState, useEffect } from "react";

function Counter() {
  const [count2, setCount2] = useState(0);
  // let count = 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hellooo form use effect");
  }, [count2]);

  const incrementCountByOne = () => {
    // count = count + 1;
    setCount(count + 1);
  };

  const decrementCountByOne = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button
        style={{
          color: "red",
        }}
        onClick={() => setCount2(count2 + 1)}
      >
        + (first)
      </button>
      <button
        style={{
          color: "red",
        }}
        onClick={incrementCountByOne}
      >
        +
      </button>
      <p>Count: {count}</p>
      <button onClick={decrementCountByOne}>-</button>
    </>
  );
}

export default Counter;
