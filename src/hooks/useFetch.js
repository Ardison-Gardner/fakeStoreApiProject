import { useState, useEffect } from "react";

const useFetch = (url, callback) => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data for this resource!");
          }
          return res.json();
        })
        .then((data) => {
          setPending(false);
          setData(data);
          setError(null);
          callback((prevState) => ({
            ...prevState,
            products: data,
          }));
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, pending, error };
};

export default useFetch;
