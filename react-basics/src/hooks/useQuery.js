import { useState, useEffect } from "react";

export function useQuery(apiEndPoint) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  //useeffect should return clean up function or nothing
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(apiEndPoint);
        const resData = await res.json();
        setData(resData);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    };

    getData();

    // loading
    // api call to get procuts
  }, [apiEndPoint]);

  return { data, status, error };
}
