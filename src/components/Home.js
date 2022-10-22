import { useState, useEffect } from "react";
import AllProducts from "./AllProducts";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch data for this resource!");
        }
        return res.json();
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <div className="home">
      <h1>HOME</h1>
      {products && <AllProducts products={products} title="All Products" />}
    </div>
  );
};

export default Home;
