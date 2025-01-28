"use client";

import { ReactNode, useEffect, useState } from "react";
import { CartContext, CartItem } from "./CartContext";
import { toast } from "react-toastify";

  const CartProvider = ({children}:{children : ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
      }
      return [];
    });

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems")
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart items from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === item._id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + item.quantity;

        // Check if the updated quantity exceeds the stock level
        if (newQuantity > existingItem.stockLevel) {
          toast.error(
            `Cannot add more than ${existingItem.stockLevel} items of this product.`,
            {
              autoClose: 1000,
            }
          );
          return prevItems;
        }

        if (newQuantity > 5) {
          toast.error("Cannot add more than 5 items of the same product.", {
            autoClose: 1000,
          });
          return prevItems;
        }

        toast.info("Product Quantity Updated!", { autoClose: 500 });
        return prevItems.map((i) =>
          i._id === item._id ? { ...i, quantity: newQuantity } : i
        );
      }

      // Check if the quantity exceeds stock before adding to the cart
      if (item.quantity > item.stockLevel) {
        toast.error(
          `Cannot add more than ${item.stockLevel} items of this product.`,
          {
            autoClose: 1000,
          }
        );
        return prevItems;
      }

      if (item.quantity > 5) {
        toast.error("Cannot add more than 5 items of the same product.", {
          autoClose: 1000,
        });
        return prevItems;
      }

      toast.success("Product Added to Cart!", { autoClose: 500 });
      return [...prevItems, item];
    });
  };

  function removeFromCart(productId: string) {
    setCartItems((currentCart) =>
      currentCart.filter((eachItem) => eachItem._id !== productId)
    );
    toast.warning("Product Removed from Cart!");
  }

  function updateQuantity(productId: string, newQuantity: number) {
    setCartItems((currentCart) =>
      currentCart.map(
        (eachCartItems) =>
          eachCartItems._id === productId
            ? { ...eachCartItems, quantity: newQuantity }
            : eachCartItems,
        toast.info("Product Quantity Updated!", {
          autoClose: 1000,
        })
      )
    );
  }

  return (
    <div>
      <CartContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          updateQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;