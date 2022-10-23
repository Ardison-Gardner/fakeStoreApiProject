const AllProducts = ({ products }) => {
  return (
    <div className="product-list">
      <h1>All Products</h1>
      {products.map((product) => (
        <div className="product-preview" key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
