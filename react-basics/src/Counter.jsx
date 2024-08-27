import "./App.css";
import { useState } from "react";

function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);

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
