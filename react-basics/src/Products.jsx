import { useContext } from "react";
import { useQuery } from "./hooks/useQuery";
import { GrandParentContext } from "./App";

export function Products() {
  const grandParentName = useContext(GrandParentContext);
  const { data, status, error } = useQuery("https://dummyjson.com/products");
  return (
    <>
      <h1>Products: {grandParentName}</h1>
      {status === "error" && <p>{error}</p>}
      {status === "loading" && <p>Loading...</p>}
      <ul>
        {status === "success" &&
          data.products.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
    </>
  );
}
