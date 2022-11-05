import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;

  return (
    <section className="section product">
      <img src={image} name={name} />
      <h4>{name}</h4>
      <Link to="/products">Back To Home</Link>
    </section>
  );
};

export default SingleProduct;
