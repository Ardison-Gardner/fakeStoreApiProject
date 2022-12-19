import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

//change function to ProductView

const ProductView = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isPending,
  } = useFetch("https://fakestoreapi.com/products/" + id);
};

const ProductView = () => {
  <div className="product-view">
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
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

export default ProductView;
