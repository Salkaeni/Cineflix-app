import React from 'react';

const Checkout = ({ cartItems, total, onPlaceOrder }) => {
  const handlePlaceOrder = () => {
    // Trigger the place order function passed as a prop
    onPlaceOrder();
  };

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
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
