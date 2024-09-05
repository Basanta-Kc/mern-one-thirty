import { useEffect, useReducer } from "react";

// const user = { name: 'basanta', age: 10}
// const temp = {...user}
// const {name, ...remaing} = user;

function reducer(state, action) {
  switch (action.type) {
    case "DATA_FETCHED":
      return { ...state, status: "success", data: action.data };
    case "ERROR":
      return { ...state, status: "error", data: null, error: action.error };
  }
}

export function useQuery(apiEndPoint) {
  // const [data, setData] = useState([]);
  // const [status, setStatus] = useState("loading");
  // const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(reducer, {
    data: [],
    status: "loading",
    error: null,
  });

  //useeffect should return clean up function or nothing
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(apiEndPoint);
        const resData = await res.json();
        // setData(resData);
        // setStatus("success");

        dispatch({ type: "DATA_FETCHED", data: resData });
      } catch (err) {
        // setError(err.message);
        // setStatus("error");
        dispatch({ type: "ERROR", error: err.message });
      }
    };

    getData();

    // loading
    // api call to get procuts
  }, [apiEndPoint]);

  return state;
}
