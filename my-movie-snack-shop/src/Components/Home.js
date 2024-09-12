import React, { useEffect, useState } from 'react';
import SnackItem from './SnackItem';
import TicketItem from './TicketItem';
import { fetchSnacks, fetchTickets } from '../services/api';

const Home = ({ addToCart }) => {
  const [snacks, setSnacks] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const snacksData = await fetchSnacks();
      const ticketsData = await fetchTickets();
      setSnacks(snacksData);
      setTickets(ticketsData);
    };

    loadItems();
  }, []);

  return (
    <div>
      <h1>Available Tickets</h1>
      <div className="items-container">
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} ticket={ticket} addToCart={addToCart} />
        ))}
      </div>

      <h1>Available Snacks</h1>
      <div className="items-container">
        {snacks.map(snack => (
          <SnackItem key={snack.id} snack={snack} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
