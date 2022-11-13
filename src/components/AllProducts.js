import { formatDollars } from "../utils/utils";
import "./styles/AllProducts.css";

// add formatting function to import

const AllProducts = ({ products }) => {
  console.log();
  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-preview" key={product.id}>
            <img src={product.image} />
            <h2>{product.title}</h2>
            <p>{formatDollars(product.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
