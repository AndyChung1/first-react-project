import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ShopContext } from "../context/context";
import { laptops } from "./Products";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  let cart = Object.entries(cartItems);
  const cartQuantity = (cart) => {
    let res = 0;
    for (let i of cart) {
      res += i[1];
    }
    return res;
  };
  let quantity = cartQuantity(cart);
  return (
    <div>
      <h1>{quantity > 0 ? "Your Cart Items" : "Your cart is empty"}</h1>
      {laptops.map((product) => {
        if (cartItems[product.id] !== 0) {
          return (
            <CartItem
              key={product.id}
              product={product}
              quantity={cartItems[product.id]}
            />
          );
        }
      })}
    </div>
  );
}
