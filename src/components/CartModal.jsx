import React from 'react';

export default function CartModal({ cart, onClose, onRemove }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg overflow-y-auto max-h-[80vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cart Items</h2>
          <button onClick={onClose} className="text-red-600 font-bold">X</button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-sm">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
