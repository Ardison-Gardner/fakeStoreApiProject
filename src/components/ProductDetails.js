import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

//change function to ProductView

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isPending,
  } = useFetch("https://fakestoreapi.com/products/" + id);
};

const ProductDetails = () => {
  <div className="product-details">
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {product && (
      <div>
        <img src={product.image} />
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
      </div>
    )}
  </div>;
};

export default ProductDetails;
