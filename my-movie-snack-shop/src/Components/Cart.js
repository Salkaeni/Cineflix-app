import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, updateCart, proceedToCheckout }) => {
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} updateCart={updateCart} />
        ))}
      </div>
      <h2>Total: ${getTotal()}</h2>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
