const AllProducts = ({ products, title }) => {
  console.log("AllProducts: ", products);
  return (
    <div className="product-list">
      <h2>{title}</h2>
      {products.map((product) => (
        <div className="product-preview" key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
