import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShoppingCart, FiStar } from 'react-icons/fi';

export default function NexusStore() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Premium Black Hoodie", price: 49.99, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Classic White Sneakers", price: 89.99, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Minimalist Watch", price: 129.99, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Leather Backpack", price: 79.99, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black font-semibold">
            <FiArrowLeft /> Back to Agency
          </Link>
          <h1 className="text-2xl font-black tracking-tighter">NEXUS.</h1>
          <button className="relative p-2 text-gray-700 hover:text-black">
            <FiShoppingCart size={24} />
            {cart.length > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cart.length}</span>}
          </button>
        </div>
      </nav>

      <div className="bg-black text-white py-20 text-center px-6">
        <h2 className="text-5xl font-bold mb-4 tracking-tight">Summer Collection 2026</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Discover the latest trends in minimal fashion and premium accessories.</p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">Shop Now</button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-8 text-gray-800">Featured Products</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex text-yellow-400 mb-2"><FiStar fill="currentColor"/><FiStar fill="currentColor"/><FiStar fill="currentColor"/><FiStar fill="currentColor"/><FiStar fill="currentColor"/></div>
                <h4 className="font-semibold text-gray-800 mb-1">{p.name}</h4>
                <p className="text-gray-500 font-bold mb-4">${p.price}</p>
                <button onClick={() => addToCart(p)} className="w-full border-2 border-black text-black font-bold py-2 rounded-lg hover:bg-black hover:text-white transition-colors">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}