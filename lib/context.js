import React, { createContext, useContext, useState } from "react";
import { Context } from "urql";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Adding State
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Increment products
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrement products
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  //Add product to cart
  const onAdd = (product, quantity) => {
    //Total Price in the cart
    setTotalPrice(prevTotal => prevTotal + product.price * quantity);

    //Increase total quantity in the cart icon
    setTotalQuantities(prevTotal => prevTotal + quantity);

    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    }else{
        setCartItems([...cartItems, {...product, quantity: quantity}])
    }
  };

  //Remove product from the cart
  const onRemove = (product) => {

    //Total Price in the cart
    setTotalPrice(prevTotal => prevTotal - product.price );

    //Decrease total quantity in the cart icon
    setTotalQuantities(prevTotal => prevTotal - 1);

    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    }else{
        setCartItems(cartItems.map((item) => item.slug === product.slug ? {...exist, quantity: exist.quantity - 1} : item))
    }
  }

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        setShowCart,
        showCart,
        onAdd,
        onRemove,
        cartItems,
        totalQuantities,
        totalPrice,
        setQty
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
