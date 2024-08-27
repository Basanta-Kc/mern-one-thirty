import "./App.css";
import { useState } from "react";

// cons todos = []
// todos.push('test")
// todos === todos

function App() {
  //const todos = ["learn html", "Learn css", "learn Js"];
  const [todos, setTodos] = useState(["learn html", "Learn css", "learn Js"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, e.target[0].value]);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required />
        <input type="submit" value="add todo" />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}{" "}
              <button
                onClick={() => {
                  console.log(index);

                  // todos.splice(index, 1)
                  // setTodos([...todos])
                  const newTodos = todos.filter((todo, i) => i !== index);
                  setTodos(newTodos);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
