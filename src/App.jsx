import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useState } from 'react';

// Pages Import
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

// Portfolio Projects Import (Nayi Files)
import NexusStore from './pages/NexusStore';
import AuraLanding from './pages/AuraLanding';
import FinDash from './pages/FinDash';

// Components
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
        
        {/* Nayi Portfolio Projects ki Routes */}
        <Route path="/project/nexus" element={<NexusStore />} />
        <Route path="/project/aura" element={<AuraLanding />} />
        <Route path="/project/findash" element={<FinDash />} />
        
        {/* Dashboard Route */}
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