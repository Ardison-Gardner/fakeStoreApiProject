import { useState, useEffect } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  /* const products = useFetch("https://fakestoreapi.com/products");
  console.log(products);*/

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
        console.log("Products: ", products);
      });
  }, []);

  return (
    <div className="products-list">
      <h2>All Products</h2>
    </div>
  );
};

export default AllProducts;
