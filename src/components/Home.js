import AllProducts from "./AllProducts";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: products,
    pending,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {!!products.length && <AllProducts products={products} />}
    </div>
  );
};

export default Home;
