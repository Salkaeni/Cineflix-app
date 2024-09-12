
// src/services/api.js


    export const fetchSnacks = async () => {
        const response = await fetch('http://localhost:3000/snacks');
        if (!response.ok) {
          throw new Error('Failed to fetch snacks');
        }
        return await response.json();
      };
      
      export const fetchTickets = async () => {
        const response = await fetch('http://localhost:3000/tickets');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        return await response.json();
      };


  