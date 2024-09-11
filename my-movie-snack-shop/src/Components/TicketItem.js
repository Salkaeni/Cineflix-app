import React from 'react';

function TicketItem({ ticket, addToCart }) {
  return (
    <div className="ticket-item">
      <h3>{ticket.movie}</h3>
      <p>Time: {ticket.time}</p>
      <p>Price: ${ticket.price}</p>
      <button onClick={() => addToCart(ticket)}>Add to Cart</button>
    </div>
  );
}

export default TicketItem;
