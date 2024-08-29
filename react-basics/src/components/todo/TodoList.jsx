import { Button } from "../Button";

export function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo}{" "}
            <Button
              text="Delete"
              color="red"
              onClick={() => {
                handleDelete(index);
              }}
            />
            <Button
              text="Edit"
              color="Green"
              onClick={() => {
                handleEdit(index);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
