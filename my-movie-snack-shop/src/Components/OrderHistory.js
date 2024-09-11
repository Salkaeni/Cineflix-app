import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the orders from the JSON server
    axios.get('http://localhost:3000/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No past orders available.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Items: {order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
              <p>Total Price: ${order.totalPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
