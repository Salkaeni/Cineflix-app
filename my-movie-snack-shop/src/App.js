import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import OrderHistory from './Components/OrderHistory';
import './App.css';

function App() {
  // Sample cartItems to pass as props
  const cartItems = [
    // Add cart item examples here if needed
  ];

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
