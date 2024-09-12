import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('http://localhost:3000/orders');
      const ordersData = await response.json();
      setOrders(ordersData);
    };

    fetchOrders();
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
};

export default OrderHistory;
