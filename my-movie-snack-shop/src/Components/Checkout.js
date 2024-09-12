import React from 'react';
import CheckoutForm from './CheckoutForm'; // Import the CheckoutForm component

const Checkout = ({ cartItems, total, onPlaceOrder }) => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Order Summary</h2>
          <ul className="checkout-items">
            {cartItems.map(item => (
              <li key={item.id} className="checkout-item">
                <h3>{item.name || item.title}</h3>
                <p>Quantity: {item.quantity || 1}</p>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <h2>Total: ${total}</h2>
            <CheckoutForm onPlaceOrder={onPlaceOrder} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
