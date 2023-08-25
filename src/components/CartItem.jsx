import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../context/context";

export default function CartItem({product, quantity}) {
  const {removeFromCart} = useContext(ShopContext)
  return (
    <div className="cart-item">
      <img src={product.image} />
      <div className="product-name">
        <p>
          <b>{product.name}</b>
        </p>
        <p>Price: ${product.price}</p>
        <p>Qty: {quantity}</p>
      </div>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
}
