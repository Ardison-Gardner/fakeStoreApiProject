import { useState, useEffect } from "react";

const AllProducts = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="all-products">
      <h2>All Products</h2>
    </div>
  );
};

export default AllProducts;
