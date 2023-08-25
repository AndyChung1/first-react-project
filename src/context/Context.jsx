import { createContext, useEffect, useState } from "react";
import { laptops } from "../components/Products";

// get total price
// update item count
// cart = {
//     id: quantity,
// }

export const ShopContext = createContext(null);

const getInitialCart = () => {
    const data = JSON.parse(localStorage.getItem('cartItems'));
    if (!data) {
        let cart = {};
        for (let i = 1; i < laptops.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    }
    return data;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getInitialCart())

    useEffect(() => {
        localStorage.setItem(
            'cartItems',
            JSON.stringify(cartItems)
        )
    }, [cartItems])

    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }

    const values = {
        cartItems,
        addToCart,
        removeFromCart,
    }

    return (
        <ShopContext.Provider value={values}>
            {props.children}
        </ShopContext.Provider>
    );
};