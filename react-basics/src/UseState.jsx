import { useState } from "react";
const getValue = () => {
  return 30;
};
export function UseState() {
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState(["apple", "grapes"]);
  const [user, setUser] = useState({ name: "", age: 10 });
  const [expensiveValue, setExpensiveValue] = useState(() => {
    return getValue();
  });
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          // setCount(prev => prev + 2)
        }}
      >
        Count:{count}
      </button>
      <button
        onClick={() => {
          user.name = "basanta";
          setUser({ ...user, name: "basanta" });
        }}
      >
        Add Name
      </button>
      <button
        onClick={() => {
          // fruits.push('peineapple') wrong
          setFruits([...fruits, "pineapple"]);
        }}
      >
        Add Fruit:
      </button>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
