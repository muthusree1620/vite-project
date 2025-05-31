import React from 'react';

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Fake Store</h1>
      <button onClick={onCartClick} className="bg-white text-blue-600 px-4 py-2 rounded">
        Cart ({cartCount})
      </button>
    </nav>
  );
}



