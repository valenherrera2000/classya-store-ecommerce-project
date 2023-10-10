// ShoppingContext.js
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add items to the cart
    const addToCart = (id, price) => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id);
            if (isItemFound) {
                const updatedCart = currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                console.log("Item added to cart:", updatedCart);
                return updatedCart;
            } else {
                const newItem = { id, quantity: 1, price };
                console.log("New item added to cart:", newItem);
                return [...currItems, newItem];
            }
        });
    };

    // Function to remove items from the cart
    const removeFromCart = (id) => {
        setCart((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    // Function to calculate total quantity in the cart
    const getTotalQuantity = () => {
        return cart.reduce((acc, curr) => acc + curr.quantity, 0);
    };

    // Function to calculate total cost of items in the cart
    const getTotalCost = () => {
        return cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalQuantity, getTotalCost, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
