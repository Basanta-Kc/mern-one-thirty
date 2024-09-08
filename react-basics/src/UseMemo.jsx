import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();
  const handleAdd = () => setCount(count + 1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const factorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      console.log("Fact: loop is running");
      fact = fact * i;
    }

    // factResultStore[10] = output ( 328000000)
    return fact;
  };

  // const factorValue = factorial(count) // count, text(value)
  const factorialValue = useMemo(() => {
    return factorial(count);
  }, [count]);

  return (
    <>
      <button onClick={handleAdd}>add + </button>
      <p>Count: {count}</p>
      <p>
        Factorial of {count} : {factorialValue}
      </p>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
}

export default App;
