import { useQuery } from "./hooks/useQuery";

export function Products() {
  const { data, status, error } = useQuery("https://dummyjson.com/products");
  return (
    <>
      <h1>Products</h1>
      {status === "error" && <p>{error}</p>}
      {status === "loading" && <p>Loading...</p>}
      <ul>
        {status === "success" &&
          data.products.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
    </>
  );
}
