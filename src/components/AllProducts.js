import { useState, useEffect } from "react";

const AllProducts = () => {
  console.log("AllProducts is rendering.");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch data for this resource.");
        }
        console.log("Retrieving data...");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="all-products">
      {data.map((product) => (
        <div className="product-preview" key={data.id}>
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
