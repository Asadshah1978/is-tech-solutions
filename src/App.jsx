import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useState } from 'react';

// Pages Import
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

// Projects Import
import NexusStore from './pages/NexusStore';
import AuraLanding from './pages/AuraLanding';
import FinDash from './pages/FinDash';

import SplashScreen from './components/SplashScreen';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
}

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Toaster position="top-right" toastOptions={{ style: { background: '#112240', color: '#fff', border: '1px solid #00E5FF' } }} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Projects */}
        <Route path="/project/nexus" element={<NexusStore />} />
        <Route path="/project/aura" element={<AuraLanding />} />
        <Route path="/project/findash" element={<FinDash />} />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}