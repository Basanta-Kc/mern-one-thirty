import { useQuery } from "./hooks/useQuery";

export function Users() {
  const { data, status, error } = useQuery("https://dummyjson.com/users");
  return (
    <>
      <h1>Products</h1>
      {status === "error" && <p>{error}</p>}
      {status === "loading" && <p>Loading...</p>}
      <ul>
        {status === "success" &&
          data.users.map(({ id, firstName, lastName }) => (
            <li key={id}>{`${firstName} ${lastName}`}</li>
          ))}
      </ul>
    </>
  );
}
