"use client"

import { ReactNode, useContext, useState } from "react";
import { CartContext, CartItem} from "./CartContext";
import { toast } from "react-toastify";

const CartProvider = ({children}:{children : ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function addToCart (product: CartItem) {
        setCartItems(currentCart => {
            const existingItem = currentCart.find(eachItem=> eachItem._id === product._id)
            
            if (existingItem) {
                return currentCart.map(eachItem => {
                    return eachItem._id === product._id
                    ? {...eachItem, quantity: eachItem.quantity + 1}
                    : eachItem
                })
            }

            toast.success("Product Added to Cart!")
            return [...currentCart, {...product,quantity:1}]
        }
        )
    }

    function removeFromCart (productId: string) {
        setCartItems(currentCart => currentCart.filter(eachItem=> eachItem._id !== productId))
        toast.warning("Product Removed from Cart!")
    }

    function updateQuantity (productId:string, newQuantity:number) {
        setCartItems(currentCart=> 
            currentCart.map(eachCartItems=> 
                eachCartItems._id === productId 
                ? {...eachCartItems, quantity: newQuantity}
                : eachCartItems
            )
        )
    }

  return (
    <div>
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity
        }}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider