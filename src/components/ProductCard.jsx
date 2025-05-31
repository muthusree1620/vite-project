import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow-md">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" />
      <h2 className="text-sm font-semibold mb-1 text-center">{product.title}</h2>
      <p className="text-lg font-bold mb-2">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

