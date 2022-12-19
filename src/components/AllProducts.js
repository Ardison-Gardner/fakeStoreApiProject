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
            <div className="product-details">
              <h4>{product.title}</h4>
              <h6>{formatDollars(product.price)}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
