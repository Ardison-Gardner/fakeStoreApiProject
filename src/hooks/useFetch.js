import { useEffect } from "react";

useEffect(() => {
  fetch("url")
    .then((res) => res.json())
    .then((json) => console.log(json));
}, []);

export default useFetch;
