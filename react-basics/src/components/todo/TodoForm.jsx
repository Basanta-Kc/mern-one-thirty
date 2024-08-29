export function TodoForm({ handleSubmit, todo, setTodo, indexToBeEdited }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <input
        type="submit"
        value={indexToBeEdited === null ? "Add" : "Update"}
      />
    </form>
  );
}
