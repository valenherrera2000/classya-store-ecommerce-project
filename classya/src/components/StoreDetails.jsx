import React from 'react';
import storeDetails1 from '../assets/img/free-shipping.png';
import storeDetails2 from '../assets/img/many-stores.png';
import storeDetails3 from '../assets/img/climate-neutral.png';
import storeDetails4 from '../assets/img/customer-love.png';

const StoreDetails = () => {
    return (
        <div id="about" className = "store-details">
            <img src={storeDetails1} alt="Free Shipping Message" />
            <img src={storeDetails2} alt="Many Stores Message" />
            <img src={storeDetails3} alt="Climate Neutral Message" />
            <img src={storeDetails4} alt="Client Love Message" />
        </div>
    );
};

export default StoreDetails;
