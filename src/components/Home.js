import AllProducts from "./AllProducts";
import useFetch from "../hooks/useFetch";

import { useContext } from "react";
import { GlobalState } from "../context/globalState";

const Home = () => {
  const { state, setState } = useContext(GlobalState);
  const {
    data: products,
    pending,
    error,
  } = useFetch("https://fakestoreapi.com/products", setState);
  // console.log("this is from context", { state }, state.products.length);
  return (
    <div className="home">
      {error ? <div>{error}</div> : null}
      {pending ? <div>Loading...</div> : null}
      {state.filteredProducts ? <AllProducts products={state.filteredProducts} /> : null}
    </div>
  );
};

export default Home;
