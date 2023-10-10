// Categories.jsx
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/ShoppingContext';

const Categories = () => {
    /* Fetch products */

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('src/data/products.json')
            .then((result) => {
                if (!result.ok) {
                    throw new Error('Failed to fetch');
                }
                return result.json();
            })
            .then((data) => {
                setProducts(data.products);
            })
            .catch((error) => console.log(error))
            .finally(() => console.log('Data has been retrieved successfully'));
    }, []);
    
    

    const categories = ['PANTS', 'SHIRTS', 'SWEATERS', 'ACCESSORIES'];

    const { cart, addToCart, removeFromCart, getTotalQuantity, getTotalCost } = useContext(CartContext);

    const getQuantityByID = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const handleAddToCart = (product) => {
        addToCart(product.id, product.price);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    console.log("Cart in Categories component:", cart);


    // Define getCategoryName function
    const getCategoryName = (productId) => {
        if (productId >= 1 && productId <= 4) {
            return 'PANTS';
        } else if (productId >= 5 && productId <= 7) {
            return 'SHIRTS';
        } else if (productId >= 8 && productId <= 11) {
            return 'SWEATERS';
        } else if (productId >= 12 && productId <= 15) {
            return 'ACCESSORIES';
        }
    };

    return (
        <div className="category-section">
            {categories.map((category) => (
                <React.Fragment key={category}>
                    <h2 id={category}>{category}</h2>
                    <div className="category">
                        {products
                            .filter((product) => getCategoryName(product.id) === category)
                            .map((product) => {
                                const quantityPerItem = getQuantityByID(product.id);

                                return (
                                    <div className="product" key={product.id}>
                                        <img src={product.img} alt={product.name} />
                                        <h3>{product.name}</h3>
                                        <h4>${product.price}</h4>
                                        <p>{product.description}</p>
                                        <div>
                                            {quantityPerItem === 0 ? (
                                                <button onClick={() => addToCart(product.id, product.price)}>+</button>
                                            ) : (
                                                <div className="selected-products">
                                                    <button onClick={() => removeFromCart(product.id)}>-</button>
                                                    <p>{quantityPerItem}</p>
                                                    <button onClick={() => addToCart(product.id, product.price)}>+</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Categories;
