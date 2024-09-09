import React from 'react';
import { Link } from 'react-router-dom';
//import './NavBar.css'; // Make sure you create this CSS file to style your navbar

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/order-history">Order History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
