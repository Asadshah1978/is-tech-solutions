import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag, FiPlus, FiCheckCircle, FiUser, FiMail, FiX, FiLogOut } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function NexusStore() {
  const [cartCount, setCartCount] = useState(0);
  const [notification, setNotification] = useState(null);
  const notificationTimer = useRef(null);

  // Demo Login & Msg States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMsgModal, setShowMsgModal] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [msgData, setMsgData] = useState({ name: '', email: '', message: '' });

  // ----- GENERATE 100+ PRODUCTS -----
  const CATEGORIES = ["Hoodie", "Sneakers", "Watch", "Backpack", "T-Shirt", "Jacket", "Jeans", "Cap", "Sunglasses", "Socks", "Belt", "Wallet", "Scarf", "Gloves", "Hat", "Shorts", "Polo", "Blazer", "Dress", "Skirt", "Boots", "Sandals", "Sweater", "Cardigan", "Coat", "Suit", "Tie"];
  
  const IMAGE_POOL = [
    "photo-1556821840-3a63f95609a7", "photo-1600185365926-3a2ce3cdb9eb", "photo-1523275335684-37898b6baf30",
    "photo-1553062407-98eeb64c6a62", "photo-1576566588028-4147f3842f27", "photo-1551028719-00167b16eac5",
    "photo-1542272604-787c3835535d", "photo-1588850561407-ed78c282e89b", "photo-1511499767150-a48a237f0083",
    "photo-1586350977771-b3b0abd50c82", "photo-1553062407-98eeb64c6a62", "photo-1622434641406-a158123450f9",
    "photo-1601924994987-69e26d50dc26", "photo-1584735175315-9d5df23860e6", "photo-1521369909029-2afed882baee",
    "photo-1591195853828-11db59a44f6b", "photo-1586790170083-2f9ceadc732d", "photo-1591047139829-d91aecb6caea",
    "photo-1539008835657-9e8e9680c956", "photo-1583496661160-fb5886a0aaaa", "photo-1608256246200-53e635b5b65f",
    "photo-1603487742131-4160ec999306", "photo-1576871337622-98d48d1cf531", "photo-1614252369475-531eba835eb1",
    "photo-1591047139829-d91aecb6caea", "photo-1594938298603-c8148c4dae35", "photo-1589756823695-278bc923f962"
  ];

  const generateProductName = (category, index) => {
    const adjectives = ["Essential", "Classic", "Premium", "Relaxed", "Slim", "Vintage", "Modern", "Signature", "Studio", "Everyday"];
    return `${adjectives[index % adjectives.length]} ${category}`;
  };

  const generatePrice = (category, index) => {
    const basePrices = { Hoodie: 89, Sneakers: 129, Watch: 249, Backpack: 79, "T-Shirt": 35, Jacket: 149, Jeans: 79, Cap: 29, Sunglasses: 89, Socks: 15, Belt: 45, Wallet: 59, Scarf: 39, Gloves: 29, Hat: 25, Shorts: 49, Polo: 49, Blazer: 179, Dress: 99, Skirt: 59, Boots: 159, Sandals: 69, Sweater: 79, Cardigan: 89, Coat: 199, Suit: 299, Tie: 39 };
    const base = basePrices[category] || 49;
    const variation = (index % 5 - 2) * 5;
    return Math.max(9.99, base + variation);
  };

  const PRODUCTS = [];
  let productId = 1;
  CATEGORIES.forEach((category, catIndex) => {
    for (let i = 0; i < 4; i++) {
      const imageId = IMAGE_POOL[(catIndex * 4 + i) % IMAGE_POOL.length];
      const imageUrl = `https://images.unsplash.com/${imageId}?w=600&auto=format&fit=crop&q=80`;
      PRODUCTS.push({
        id: productId++,
        name: generateProductName(category, i),
        price: parseFloat(generatePrice(category, i).toFixed(2)),
        category: category,
        image: imageUrl
      });
    }
  });

  // ----- HANDLE FUNCTIONS -----
  const showNotification = (productName) => {
    if (notificationTimer.current) clearTimeout(notificationTimer.current);
    setNotification(`${productName} added to cart`);
    notificationTimer.current = setTimeout(() => setNotification(null), 2000);
  };

  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    showNotification(product.name);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      toast.success("Logged in successfully! (Demo)");
    }
  };

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent to Nexus support! (Demo)");
    setShowMsgModal(false);
    setMsgData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    return () => {
      if (notificationTimer.current) clearTimeout(notificationTimer.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] font-sans selection:bg-black selection:text-white">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black font-medium transition-colors">
            <FiArrowLeft /> Back to Agency
          </Link>
          <div className="text-2xl font-bold tracking-tight text-black">NEXUS<span className="text-gray-400">.</span></div>
          
          <div className="flex items-center gap-6">
            {/* Login/Logout Button */}
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)} className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-black">
                <FiLogOut /> Logout
              </button>
            ) : (
              <button onClick={() => setShowLoginModal(true)} className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-black">
                <FiUser /> Login
              </button>
            )}

            <button className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition">
              <FiShoppingBag size={18} />
              <span className="hidden sm:inline">Cart</span>
              <span className="ml-1 inline-flex items-center justify-center rounded-full bg-black text-white text-xs w-5 h-5">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-black text-white text-sm px-5 py-3 rounded-full shadow-lg flex items-center gap-3">
            <FiCheckCircle className="text-green-400" />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-gray-200 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&auto=format&fit=crop&q=80" alt="Fashion hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md">Redefine Your Style</h1>
          <p className="mt-3 text-lg md:text-xl text-white/90 max-w-lg drop-shadow-sm">Minimalist essentials for the modern wardrobe.</p>
          <a href="#featured" className="mt-8 bg-black text-white font-medium py-3 px-8 rounded-full text-sm tracking-wide transition hover:bg-gray-800 hover:scale-105 shadow-lg inline-block">Shop Now</a>
        </div>
      </section>

      {/* Products Grid */}
      <section id="featured" className="max-w-7xl mx-auto py-16 px-4 md:px-8 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-8 gap-2 border-b border-gray-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">All Products</h2>
          <span className="text-sm text-gray-500">{PRODUCTS.length} items</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 group">
              <div className="aspect-square bg-gray-50 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">{product.category}</p>
                    <h3 className="font-medium text-black text-base mt-1 line-clamp-2">{product.name}</h3>
                  </div>
                  <span className="font-bold text-black ml-2">${product.price.toFixed(2)}</span>
                </div>
                <button onClick={() => addToCart(product)} className="mt-5 w-full bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-sm font-medium py-3 rounded-full transition-colors duration-200 flex items-center justify-center gap-2">
                  <FiPlus /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with Contact Option */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} NEXUS. A demo project by IS Tech Solutions.</p>
          <button onClick={() => setShowMsgModal(true)} className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <FiMail /> Contact Support
          </button>
        </div>
      </footer>

      {/* --- MODALS --- */}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><FiX size={24}/></button>
            <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="email" placeholder="Email Address" required value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-black" />
              <input type="password" placeholder="Password" required value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-black" />
              <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">Login (Demo)</button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">Don't have an account? <span className="text-black font-semibold cursor-pointer">Sign Up</span></p>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMsgModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
            <button onClick={() => setShowMsgModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><FiX size={24}/></button>
            <h2 className="text-2xl font-bold text-center mb-2">Contact Support</h2>
            <p className="text-gray-500 text-center text-sm mb-6">We usually reply within 24 hours.</p>
            <form onSubmit={handleMsgSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" required value={msgData.name} onChange={(e) => setMsgData({...msgData, name: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-black" />
              <input type="email" placeholder="Your Email" required value={msgData.email} onChange={(e) => setMsgData({...msgData, email: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-black" />
              <textarea placeholder="Your Message" required rows="3" value={msgData.message} onChange={(e) => setMsgData({...msgData, message: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-black resize-none"></textarea>
              <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">Send Message (Demo)</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}