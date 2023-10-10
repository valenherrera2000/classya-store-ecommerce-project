// CartIcon.jsx
import React, { useContext } from 'react';
import cartImg from '../assets/img/shopping-cart-icon.png';
import { CartContext } from '../context/ShoppingContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <div className="cart-icon">
            <p>{quantity}</p>
            <img src={cartImg} alt="Cart Icon" />
        </div>
    );
};

export default Cart;
