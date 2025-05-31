import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setIsModalOpen(true)} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      {isModalOpen && (
        <CartModal
          cart={cart}
          onClose={() => setIsModalOpen(false)}
          onRemove={handleRemoveFromCart}
        />
      )}
    </div>
  );
}

export default App
