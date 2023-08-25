import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../context/context";

export default function Product({ product }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={product.image} />
      <p className="product-name">
        <b>{product.name}</b>
      </p>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
}
