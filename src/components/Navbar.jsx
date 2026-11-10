import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import Logo from './Logo';

export default function Navbar() {
  const { currentUser } = useAuth();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 z-40 bg-brandDark/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity z-50">
            <Logo className="w-10 h-10" />
            <span><span className="text-brandCyan">IS</span> Tech Solutions</span>
          </Link>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-brandCyan transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            {currentUser ? (
              <Link to="/dashboard" className="bg-brandCyan/10 border border-brandCyan text-brandCyan px-6 py-2 rounded-full text-sm font-semibold hover:bg-brandCyan hover:text-brandDark transition-all">Dashboard</Link>
            ) : (
              <button onClick={() => setIsAuthOpen(true)} className="bg-white text-brandDark px-6 py-2 rounded-full text-sm font-bold hover:bg-brandCyan transition-all">Client Login</button>
            )}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-2xl text-white z-50">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#112240] border-b border-gray-800 absolute w-full left-0 top-full p-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-left text-gray-300 hover:text-brandCyan">{link.name}</Link>
            ))}
            {currentUser ? (
              <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="bg-brandCyan text-brandDark px-6 py-3 rounded-lg text-center font-bold">Dashboard</Link>
            ) : (
              <button onClick={() => { setIsMobileMenuOpen(false); setIsAuthOpen(true); }} className="bg-brandCyan text-brandDark px-6 py-3 rounded-lg font-bold">Client Login</button>
            )}
          </div>
        )}
      </nav>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}