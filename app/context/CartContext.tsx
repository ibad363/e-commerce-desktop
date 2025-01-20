'use client'
import { createContext, useContext } from 'react';
import { NumberRule } from 'sanity';

export interface CartItem {
    _id: string;
    productTitle: string;
    price: string;
    image: string;
    quantity: number;
    stockLevel: number
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, newQuantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart(){
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context
}