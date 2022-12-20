import { formatDollars } from "../utils/utils";
import "./styles/AllProducts.css";
import { Link } from "react-router-dom";

const AllProducts = ({ products }) => {
  console.log(products);
  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-preview" key={product.id}>
            <img src={product.image} />
            <div className="product-details">
              <Link to={`/products/${product.id}`}>
                <h4>{product.title}</h4>
              </Link>
              <h5>{formatDollars(product.price)}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
