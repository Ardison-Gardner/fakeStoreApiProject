import AllProducts from "./AllProducts";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: products,
    pending,
    error,
  } = useFetch("https://fakestoreapi.com/products?limit=40");

  return (
    <div className="home">
      {error ? <div>{error}</div> : null}
      {pending ? <div>Loading...</div> : null}
      {products ? <AllProducts products={products} /> : null}
    </div>
  );
};

export default Home;
