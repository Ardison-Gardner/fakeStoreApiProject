import "./styles/ProductView.css";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductView = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: product,
    error,
    isPending,
  } = useFetch("https://fakestoreapi.com/products/" + id);

  return (
    <div className="product-details">
      {isPending ? <div>Loading...</div> : null}
      {error ? <div>{error}</div> : null}
      {product ? (
        <article>
          <img src={product.image} />
          <h1>{product.title}</h1>
          <h2>{product.description}</h2>
        </article>
      ) : null}
    </div>
  );
};

export default ProductView;
