import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import OrderHistory from './Components/OrderHistory';
import Checkout from './Components/Checkout'; // Import the Checkout component
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const addToCart = (item) => {
    // Add item to cart logic
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setTotalPrice(prevTotal => prevTotal + item.price);
  };

  const removeFromCart = (id) => {
    // Remove item from cart logic
    const itemToRemove = cartItems.find(cartItem => cartItem.id === id);
    if (itemToRemove) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
      setTotalPrice(prevTotal => prevTotal - itemToRemove.price * itemToRemove.quantity);
    }
  };

  const handlePlaceOrder = () => {
    // Place order logic, e.g., send data to backend and clear cart
    console.log('Order placed!');
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <Router>
      <div className="App">
      
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} totalPrice={totalPrice} onPlaceOrder={handlePlaceOrder} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

