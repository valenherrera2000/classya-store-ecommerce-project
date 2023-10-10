import React from 'react';
import paymentsImg from '../assets/img/payment-methods.png';

const BottomDetails = () => {
    return (
        <div className="bottom-details">
            <div className="email-subscription">
                <div className="subscription-text">
                    <p>
                        CLASSYA MEMBERSHIP!
                        <br />
                        Be the first one to get notified about sales & discounts:
                    </p>
                    <div id="bottom" className="email-form">
                        <input type="email" placeholder="Place your email here" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="payment-methods">
                <img src={paymentsImg} alt="Payment Methods" />
            </div>
        </div>
    );
};

export default BottomDetails;
