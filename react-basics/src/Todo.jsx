import "./App.css";
import { useState, useEffect } from "react";
import { TodoForm } from "./components/todo/TodoForm";
import { TodoList } from "./components/todo/TodoList";
import PropTypes from "prop-types";
function TodoTitle({ title, count }) {
  return (
    <h1>
      {title} {count}
    </h1>
  );
}

TodoTitle.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
};

function Todo() {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [todo, setTodo] = useState(" ");
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) ?? []; // null
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedTodos;
    if (indexToBeEdited === null) {
      updatedTodos = [...todos, todo];
    } else {
      todos[indexToBeEdited] = todo;
      updatedTodos = [...todos];
      setIndexToBeEdited(null);
    }
    setTodo("");
    setTodos(updatedTodos);
  };

  const handleDelete = (indexToBeDeleted) => {
    const newTodos = todos.filter((todo, i) => i !== indexToBeDeleted);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    setIndexToBeEdited(index);
    setTodo(todos[index]);
  };

  return (
    <>
      <TodoTitle title={"Todo App"} count={todos.length} />
      <TodoForm
        todo={todo}
        handleSubmit={handleSubmit}
        setTodo={setTodo}
        indexToBeEdited={indexToBeEdited}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default Todo;
