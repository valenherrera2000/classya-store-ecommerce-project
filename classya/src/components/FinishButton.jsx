import React from 'react';
import { Link } from 'react-router-dom';
import classyaLogo from '../assets/img/classya-icon.png';
import '../css/Checkout.css';

const CheckoutFinish = () => {
    return (
        <div className="checkout-finish">
            <div className="checkout-header">
                <img src={classyaLogo} alt="Classya Logo" />
                <h1>Order Confirmed</h1>
                <p>Thank you for your purchase!</p>
            </div>
            <div className="confirmation-message">
                <p>Your order has been successfully placed.</p>
                <p>An email confirmation has been sent to your provided email address.</p>
            </div>
            <div className="back-to-main">
                <Link to="/">
                    <button>Back to Main</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckoutFinish;
