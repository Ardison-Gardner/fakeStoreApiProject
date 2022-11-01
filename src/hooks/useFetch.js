import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data for this resource!");
          }
          return res.json();
        })
        .then((data) => {
          setPending(false);
          setData(data);
          console.log(data);
          setError(null);
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
