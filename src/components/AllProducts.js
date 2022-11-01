import "./styles/AllProducts.css";

const AllProducts = ({ products }) => {
  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-preview" key={product.id}>
            <img src={product.image} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
