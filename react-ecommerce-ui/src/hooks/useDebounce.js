import { useEffect, useState } from "react";
export function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(value); // setDebouncedSearc('abc')
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [value, delay]); //abc

  return debounce;
}
