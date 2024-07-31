// Buy.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import "../css/Buy.css"; 
const Buy = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  // Debugging: Log location state
  console.log(location.state);

  return (
    <div className='buy-page'>
      <h1>Order Details</h1>
      <div className='order-summary'>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div>
            <h2>Items:</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} width={50} height={50} />
                  <span>{item.name}</span>
                  <span>₹{item.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <h2>Total Price: ₹{totalPrice.toLocaleString()}</h2>
          </div>
        )}
      </div>
      <div className='payment-info'>
        <h2>Payment Information</h2>
        {/* Add your payment information form or instructions here */}
        <p>Proceed with payment...</p>
      </div>
    </div>
  );
};

export default Buy;
