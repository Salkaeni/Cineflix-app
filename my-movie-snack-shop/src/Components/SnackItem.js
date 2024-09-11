import React from 'react';

function SnackItem({ snack, addToCart }) {
  return (
    <div className="snack-item">
      <h3>{snack.name}</h3>
      <p>Price: ${snack.price}</p>
      <button onClick={() => addToCart(snack)}>Add to Cart</button>
    </div>
  );
}

export default SnackItem;
