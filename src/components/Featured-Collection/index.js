import React, { useContext } from "react";
import ProductsContextProvider, {
  ProductsContext,
} from "../../context/products-context";
import FeaturedProduct from "../shared/Featured/index";
import "./FeaturedCollection.scss";

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);

  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">New Arrivals</h2>
      <div className="products">{productItems}</div>
    </div>
  );
};

export default FeaturedCollection;
