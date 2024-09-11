import { useQuery } from "./hooks/useQuery";

export function Products() {
  // const grandParentName = useContext(GrandParentContext);
  const { data, status, error } = useQuery("https://dummyjson.com/products");
  return (
    <>
      {status === "error" && <p>{error}</p>}
      {status === "loading" && <p>Loading...</p>}
      <ul>
        {status === "success" &&
          data.products.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
    </>
  );
}
