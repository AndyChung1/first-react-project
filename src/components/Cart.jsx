import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ShopContext } from "../context/context";
import { laptops } from "./Products";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  let cart = Object.entries(cartItems);
  const getSubtotal = (cartItems) => {
    let subTotal = 0
    let cart = Object.entries(cartItems)
    for (let i of cart) {
        const product = getProductFromId(Number(i[0]))
        subTotal += product.price * i[1]
    }
    return Math.round(subTotal * 100) / 100
}

  const cartQuantity = (cart) => {
    let res = 0;
    for (let i of cart) {
      res += i[1];
    }
    return res;
  };

  const getProductFromId = (id) => {
    for (let product of laptops) {
        if (product.id === id) {
            return product
        }
    }
  }

  let quantity = cartQuantity(cart);
  let subTotal = getSubtotal(cartItems);
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
              subTotal={subTotal}
            />
          );
        }
      })}
      <p>{quantity > 0 && `Subtotal: $${subTotal}`}</p>
    </div>
  );
}
